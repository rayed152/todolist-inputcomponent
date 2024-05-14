<!-- Input.svelte -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let value: string;
  export let placeholder: string;
  export let hint: string = '';
  // export let error: string = '';
  export let labelName: string = '';
  export let disabled: boolean = false; 
  export let roundedStyle: string = 'rounded';
  export let type: any = 'email';
  

  //  // Function to validate email format
  //  const isValidEmail = (email: string): boolean => {
  //     // Regular expression for email validation
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;s
  //     return emailRegex.test(email);
  // };

</script>

<div class="relative ">
 
  {#if labelName}
    <div>
      <label for={labelName}>{labelName}</label>
    </div>
  {/if}
  
      <div class="absolute inset-y-0 flex items-center pl-1 w-8">
        <slot name="leftAddon"/>
      </div>

      <div class="absolute inset-y-0 right-0 flex items-center w-8 pr-1" >
        <slot name="rightAddon"/>
      </div>

      <input 
          id={labelName} 
          {...{type}}
          bind:value={value} 
          placeholder={placeholder} 
          class= "
          {roundedStyle}  
           px-4 py-2  border border-gray-300 focus:border-blue-500 focus:outline-none {$$slots.leftAddon && "pl-10" } {$$slots.rightAddon ? "pr-10" : " "} "  
          {disabled}
      />
 
  {#if hint}
    <p class="mt-1 text-xs">{hint}</p>
  {/if}

  <!-- {#if error && value.trim() !== '' && !isValidEmail(value)} 
    <p class="mt-1 text-xs text-red-500">{error}</p>
  {/if} -->
</div>
