'use client'
import { BackgroundImage, Box, Button, Group, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'

const Contact = () => {
  const form = useForm({ 
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
      phoneNumber: '',
      dateOfTheEvent: Date,
      city: '',
      message: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };
  return (
    <div className="bg-slate-900 lg:py-20 py-6">

    <Box maw='1200px' mx='auto'>
    <BackgroundImage
      src='bgImg-Contact.jpg'
      radius='xl'
      >
    <Group justify='center' className='text-white	'>
      <Stack className='p-3'>
        <Title>Reserva ahora tu fecha</Title>
        <Title size='h4'>Completa el formulario y nosotros te contactamos</Title>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <Group>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
            />
          <TextInput
            withAsterisk
            label="Nombre"
            placeholder="Tu Nombre"
            key={form.key('name')}
            {...form.getInputProps('name')}
            />
          </Group>
            <TextInput
              withAsterisk
              label="Numero de telefono"
              placeholder="+54 123 456 78"
              key={form.key('phoneNumber')}
              {...form.getInputProps('phoneNumber')}
              />
            <Group>
          <TextInput
            withAsterisk
            label="Fecha"
            placeholder="dd/mm/aaaa"
            key={form.key('dateOfTheEvent')}
            {...form.getInputProps('dateOfTheEvent')}
            />
          <TextInput
            withAsterisk
            label="Ciudad"
            placeholder="ciudad"
            key={form.key('city')}
            {...form.getInputProps('city')}
            />
            </Group>
          <TextInput
            withAsterisk
            label="Mensaje"
            placeholder="Mensaje"
            key={form.key('message')}
            {...form.getInputProps('message')}
            />
        <Group justify="flex-end" mt="md">
          <Button variant='filled' type="submit">Enviar</Button>
        </Group> 
        </form>
      </Stack>
      <Stack className='p-3'>
        <Title>Contacto</Title>
        <Title size='h3'>Llamanos o mandanos un Whatsapp</Title>
        <a href='' target='_blank'>+54 12 345 678 (NUMERO 1)</a>
        <a href='' target='_blank'>+54 12 345 678 (NUMERO 2)</a>
        <a href='' target='_blank'>+54 12 345 678 (NUMERO 3)</a>
      </Stack>
      </Group>
      </BackgroundImage>
    </Box>
  </div>
  )
}

export default Contact