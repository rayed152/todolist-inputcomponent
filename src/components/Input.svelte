<!-- Input.svelte -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let value: string;
  export let placeholder: string;
  export let addonLeft: any  = '';
  export let addonRight: any = '';
  export let addonAlt: string = "";
  export let hint: string = '';
  export let error: string = '';
  export let labelName: string = '';
  export let disabled: boolean = false; 
  export let roundedStyle: string = 'rounded';
  export let type: string = 'password';
  export let backgroundColor: string = "bg-green-500"

  const dispatch = createEventDispatcher();

  const dispatchValue = (e: Event) => {
    const target = e.target as HTMLInputElement;
    value = target.value;
    dispatch('input', value);
  };

   // Function to validate email format
   const isValidEmail = (email: string): boolean => {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };

</script>

<div class="
{
  backgroundColor === "bg-gray-600"? "bg-gray-600" :
  "bg-green-500"
}
relative">
  {#if labelName}
    <div>
      <label for={labelName}>{labelName}</label>
    </div>
  {/if}
  {#if addonLeft}
      <div class="absolute pl-2 py-2">
          <!-- {#if typeof addonLeft === 'string'}
              <span class="text-gray-500">{addonLeft}</span>
          {:else}
              <img src={addonLeft} alt="logo" width="24" height="24"/>
          {/if} -->
          <img src={addonLeft} alt={addonAlt} width="24" height="24"/>
      </div>
  {/if}
  {#if addonRight}
      <div class="absolute right-0 pr-1 py-2" >
          <!-- {#if typeof addonRight === 'string'}
              <span class="text-gray-500">{addonRight}</span>
          {:else}
            <img src={addonLeft} alt="logo" width="24" height="24"/>
          {/if} -->
          <img src={addonRight} alt={addonAlt} width="24" height="24"/>
      </div>
  {/if}
  {#if disabled}
      <input 
          id={labelName} 
          type="email"
          bind:value={value} 
          placeholder={placeholder} 
          on:input={dispatchValue} 
          class="
          {
          roundedStyle === 'rounded-xl' ? 'rounded-xl' : 'rounded'
          } 
          pl-10 pr-4 py-2  border border-gray-300 focus:border-blue-500 focus:outline-none {backgroundColor}" 
          disabled 
      />
  {:else}
      <input 
          id={labelName} 
          type="email" 
          bind:value={value} 
          placeholder={placeholder} 
         on:input={dispatchValue} 
          class=
          "
          {
            roundedStyle === 'rounded-xl' ? 'rounded-xl' : 
            roundedStyle === 'rounded-lg' ? 'rounded-lg' :
            roundedStyle === 'rounded-md' ? 'rounded-md' :
            roundedStyle === 'rounded-sm' ? 'rounded-sm' :
            'rounded'
            } 
          pl-10 pr-4 py-2  border border-gray-300 focus:border-blue-500 focus:outline-none" 
      />
  {/if}
  
 
  {#if hint}
    <p class="mt-1 text-xs text-white">{hint}</p>
  {/if}

  {#if error && value.trim() !== '' && !isValidEmail(value)} 
    <p class="mt-1 text-xs text-red-500">{error}</p>
  {/if}
</div>
