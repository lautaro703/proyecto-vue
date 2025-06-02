<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schemas" @submit="onSubmit">
      <div class="form">
         <label for="nombre">Nombre:</label>
         <Field type="text" name="nombre" id="nombre" placeholder="Nombre" v-model="nombre"/><br/>
         <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
         <label for="nombre">correo:</label>
         <Field type="email" name="email" id="correo" placeholder="Correo electrónico" v-model="correo"/><br/>
         <ErrorMessage name="email"></ErrorMessage>
        </div>    
      <div class="form"> 
         <button type="submit">Registrar</button>
     </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'; 
import { schemas } from '../validationSchema';
const onSubmit = () => {
  console.log('Formulario enviado con éxito:');
};
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>