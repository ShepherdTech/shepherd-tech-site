<script lang="ts">
  import { getModalStore } from '@skeletonlabs/skeleton';
  import Button from './Button.svelte';

  const modalStore = getModalStore();

  // Form Data
  const formData = {
    firstName: '',
    lastName: '',
    tel: '',
    email: '',
    message: ''
  };

  // Validation errors
  let errors = {
    firstName: '',
    lastName: '',
    tel: '',
    email: '',
    message: ''
  };

  // Submission state
  let isSubmitting = false;
  let submitError = '';

  // Touched states
  let touched = {
    firstName: false,
    lastName: false,
    tel: false,
    email: false,
    message: false
  };

  // Validation functions
  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    return phoneRegex.test(phone);
  }

  function validateField(field: keyof typeof formData, value: string) {
    touched[field] = true;

    /* eslint-disable indent */
    switch (field) {
      case 'firstName':
        errors.firstName = !value.trim() ? 'First name is required' : '';
        break;
      case 'lastName':
        errors.lastName = !value.trim() ? 'Last name is required' : '';
        break;
      case 'email':
        if (!value.trim()) {
          errors.email = 'Email is required';
        } else if (!validateEmail(value)) {
          errors.email = 'Please enter a valid email address';
        } else {
          errors.email = '';
        }
        break;
      case 'tel':
        if (!value.trim()) {
          errors.tel = 'Phone number is required';
        } else if (!validatePhone(value)) {
          errors.tel = 'Please enter a valid phone number';
        } else {
          errors.tel = '';
        }
        break;
      case 'message':
        errors.message = !value.trim() ? 'Message is required' : '';
        break;
    }
  }

  // Handle input changes
  function handleInput(field: keyof typeof formData) {
    return (event: Event) => {
      const target = event.target as HTMLInputElement;
      formData[field] = target.value;
      validateField(field, target.value);
    };
  }

  // Check if form is valid
  function isFormValid(): boolean {
    // Validate all fields
    Object.keys(formData).forEach((field) => {
      validateField(field as keyof typeof formData, formData[field as keyof typeof formData]);
    });

    return !Object.values(errors).some((error) => error !== '');
  }

  // Form submission
  async function onFormSubmit(): Promise<void> {
    if (!isFormValid()) {
      console.log('Form is invalid');
      // Mark all fields as touched to show errors
      Object.keys(touched).forEach((field) => {
        touched[field as keyof typeof touched] = true;
      });
      return;
    }

    try {
      isSubmitting = true;
      submitError = '';

      const response = await fetch('/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || data.errors?.join(', ') || 'Failed to send message');
      }

      console.log('Form submitted successfully:', formData);
      if ($modalStore[0].response) $modalStore[0].response(formData);
      modalStore.close();
    } catch (error) {
      console.error('Error submitting form:', error);
      submitError =
        error instanceof Error ? error.message : 'An error occurred while sending your message';
    } finally {
      isSubmitting = false;
    }
  }
</script>

{#if $modalStore[0]}
  <div class="modal-example-form rounded-lg border-4 border-shire bg-black p-8 text-sandcastle">
    <header class="mb-8 text-2xl font-bold">{$modalStore[0].title ?? '(title missing)'}</header>

    <form class="modal-form space-y-8" on:submit|preventDefault={onFormSubmit}>
      <div class="flex space-x-4">
        <label class="flex-1">
          <div class="h-16">
            <span>First Name *</span>
            <input
              class="input mt-1 w-full rounded-md border-2 border-goblin p-2 {touched.firstName &&
              errors.firstName
                ? 'border-red-500'
                : ''}"
              type="text"
              value={formData.firstName}
              on:input={handleInput('firstName')}
              on:blur={() => validateField('firstName', formData.firstName)}
              placeholder="Enter name..."
            />
            <div class="h-5 text-sm text-red-500">
              {#if touched.firstName && errors.firstName}
                {errors.firstName}
              {/if}
            </div>
          </div>
        </label>
        <label class="flex-1">
          <div class="h-16">
            <span>Last Name *</span>
            <input
              class="input mt-1 w-full rounded-md border-2 border-goblin p-2 {touched.lastName &&
              errors.lastName
                ? 'border-red-500'
                : ''}"
              type="text"
              value={formData.lastName}
              on:input={handleInput('lastName')}
              on:blur={() => validateField('lastName', formData.lastName)}
              placeholder="Enter last name..."
            />
            <div class="h-5 text-sm text-red-500">
              {#if touched.lastName && errors.lastName}
                {errors.lastName}
              {/if}
            </div>
          </div>
        </label>
      </div>
      <div class="flex space-x-4">
        <label class="flex-1">
          <div class="h-16">
            <span>Phone *</span>
            <input
              class="input mt-1 w-full rounded-md border-2 border-goblin p-2 {touched.tel &&
              errors.tel
                ? 'border-red-500'
                : ''}"
              type="tel"
              value={formData.tel}
              on:input={handleInput('tel')}
              on:blur={() => validateField('tel', formData.tel)}
              placeholder="Enter phone number..."
            />
            <div class="h-5 text-sm text-red-500">
              {#if touched.tel && errors.tel}
                {errors.tel}
              {/if}
            </div>
          </div>
        </label>
        <label class="flex-1">
          <div class="h-16">
            <span>Email *</span>
            <input
              class="input mt-1 w-full rounded-md border-2 border-goblin p-2 {touched.email &&
              errors.email
                ? 'border-red-500'
                : ''}"
              type="email"
              value={formData.email}
              on:input={handleInput('email')}
              on:blur={() => validateField('email', formData.email)}
              placeholder="Enter email..."
            />
            <div class="h-5 text-sm text-red-500">
              {#if touched.email && errors.email}
                {errors.email}
              {/if}
            </div>
          </div>
        </label>
      </div>
      <label>
        <h2 class="text-lg font-bold">Message *</h2>
        <textarea
          class="input mt-1 w-full rounded-md border-2 border-goblin p-2 {touched.message &&
          errors.message
            ? 'border-red-500'
            : ''}"
          value={formData.message}
          on:input={handleInput('message')}
          on:blur={() => validateField('message', formData.message)}
          placeholder="Enter message..."
        ></textarea>
        <div class="h-5 text-sm text-red-500">
          {#if touched.message && errors.message}
            {errors.message}
          {/if}
        </div>
      </label>

      {#if submitError}
        <div class="rounded-md bg-red-100 p-4 text-red-700">
          {submitError}
        </div>
      {/if}
    </form>
    <footer class="modal-footer mt-8">
      <Button class="w-full" on:click={onFormSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </Button>
    </footer>
  </div>
{/if}
