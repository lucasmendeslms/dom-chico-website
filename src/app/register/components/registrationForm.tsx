'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Session } from 'next-auth';
import { useState, useEffect } from 'react';
import { cpf } from 'cpf-cnpj-validator';
import { Button } from '@mui/material';

import { UserController } from '@/app/modules/controllers/user.controller';
import { UserData } from '@/app/modules/models/entities/user.entity';
import { UserDto } from '@/app/modules/models/dto/user.dto';
import { ExceptionMessageDto } from '@/app/modules/models/dto/exceptionMessage.dto';
import { useRouter } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';

interface RegistrationFormPropos {
  session: Session | null;
}

export default function RegistrationForm({ session }: RegistrationFormPropos) {

  const router = useRouter()

  function formatCPF(value: string): string {
    const cleaned: string = value.replace(/\D/g, '');

    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return cleaned.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    if (cleaned.length <= 9) return cleaned.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
  }

  function formatPhone (value: string): string {
    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 7) return cleaned.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  };

  const [firstName, setFirstName] = useState(session?.user.firstName || '');
  const [lastName, setLastName] = useState(session?.user.lastName || '');
  const [CPF, setCPF] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPF(formatCPF(event.target.value));
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(event.target.value));
  };

  const [isCpfValid, setIsCpfValid] = useState(true);

  useEffect((): void => {
    CPF ? setIsCpfValid(cpf.isValid(CPF)) : setIsCpfValid(true);
  }, [CPF])

  const [disabledButton, setDisabledButton] = useState(true);

  useEffect((): void => {
    (firstName && lastName && CPF && isCpfValid && phone && phone.length === 15 && !isSubmitting) ? setDisabledButton(false) : setDisabledButton(true);
  },[firstName, lastName, CPF, isCpfValid, phone, isSubmitting])

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    let userInfo: UserDto | ExceptionMessageDto | null = null;

    try {

      const data: UserData = {
        googleAccountId: session?.user.id,
        name: `${firstName} ${lastName}`,
        cpf: CPF,
        phone,
        email: session?.user.email,
        picture: session?.user.image
      }

      userInfo = await UserController.create(data);

    } catch(e) {
      return userInfo;
    }

    setTimeout(()=> {
      'googleAccountId' in userInfo ? router.push('/home') : router.push('/error');
    }, 3000);
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className="flex flex-col m-0 p-4 max-w-md items-center"
      onSubmit={handleSubmitForm}
    >
      <div className="flex flex-col gap-4 text-red-500">

        <TextField
          id="first-name"
          label="Nome"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />

        <TextField
          id="last-name"
          label="Sobrenome"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />

        <TextField
          error={!isCpfValid}
          id="cpf"
          label="CPF"
          value={CPF}
          placeholder="000.000.000-00"
          onChange={handleCPFChange}
          inputProps={{ maxLength: 14 }}
          helperText={!isCpfValid ? 'CPF inválido' : ''}
          required
        />

        <TextField
          error={!!(phone && phone.length < 15)}
          id="phone"
          label="Telefone"
          value={phone}
          placeholder="(99) 99999-9999"
          onChange={handlePhoneChange}
          helperText={phone && phone.length < 15 ? 'Telefone incorreto' : ''}
          inputProps={{ maxLength: 15 }}
          required
        />

        <TextField
          id="email"
          label="E-mail"
          value={session?.user.email}
          disabled
        />
      </div>
      {!isSubmitting ? (
        <Button type="submit" variant="contained" className="my-4" disabled={disabledButton}>
          Cadastrar
        </Button>
      ) : <CircularProgress className="my-6" size={24}/>}
    </Box>
  );
}