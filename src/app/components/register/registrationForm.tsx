'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Session } from 'next-auth';
import { useState, useEffect } from 'react';
import { cpf } from 'cpf-cnpj-validator';

interface RegistrationFormPropos {
  session: Session | null;
}

export default function RegistrationForm({ session }: RegistrationFormPropos) {

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


  const [CPF, setCPF] = useState('');
  const [phone, setPhone] = useState('');

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPF(formatCPF(event.target.value))
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(event.target.value));
  };

  const [isCpfValid, setIsCpfValid] = useState(true);

  useEffect((): void => {
    CPF ? setIsCpfValid(cpf.isValid(CPF)) : setIsCpfValid(true);
  }, [CPF])

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className="flex flex-col gap-2 p-4 max-w-md mx-auto"
    >
      <div className="flex flex-col gap-4">

        <TextField
          id="first-name"
          label="Nome"
          defaultValue={session?.user.firstName || ''}
        />

        <TextField
          id="last-name"
          label="Sobrenome"
          defaultValue={session?.user.lastName || ''}
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
        />

        <TextField
          id="email"
          label="E-mail"
          value={session?.user.email}
          disabled
        />

      </div>
    </Box>
  );
}