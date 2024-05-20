<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Input from '../../components/Input.svelte';
    import email from "$lib/assets/email.png";
    let inputValue = '';
    let placeholder = 'Enter Email...';
    // let hint = 'This is a hint.';
   
  </script>
  
  <div class="flex justify-center items-center h-screen">
    <Input 
    labelName={"Email"}
    type={"email"}
    bind:value={inputValue} 
    placeholder={placeholder} 
    hint={"This is a hint"} 
    roundedStyle="rounded-lg"
    backgroundColor="bg-white"
    >
    <img slot="leftAddon" src={email} alt="dasdsda"/>
    <img slot="rightAddon" src={email} alt="dasdsda"/>
  </Input>
  </div>
  