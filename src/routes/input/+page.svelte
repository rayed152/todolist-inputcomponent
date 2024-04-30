<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Input from '../../components/Input.svelte';
    import email from "$lib/assets/email.png";

    let inputValue = '';
    let placeholder = 'Enter Email...';
    // let hint = 'This is a hint.';
    let error = 'Not an Email..';
    let addon = email;
    let addonRight = "hello";
    let addonAlt = "$";
    const dispatch = createEventDispatcher();
    $: console.log(inputValue);
  </script>
  
  <div class="flex justify-center items-center h-screen">
    <Input 
    labelName={"Email"}
    
    addonRight={addon}
    addonAlt = {addonAlt}
    bind:value={inputValue} 
    placeholder={placeholder} 
    hint={"hello World"} 
    error={error} 
    on:input={(e) => console.log(e.detail)
    }
    roundedStyle="rounded-xl"
    backgroundColor="bg-gray-600"
    />
  </div>
  

  