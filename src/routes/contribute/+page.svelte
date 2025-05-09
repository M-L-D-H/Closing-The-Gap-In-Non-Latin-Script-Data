<script>
  import emailjs from '@emailjs/browser';

  let name = '';
  let email = '';
  let project = '';
  let institution = '';
  let pi = '';
  let url = '';
  let comments = '';
  const formType = 'contributor';  // Predefined as "contributor"

  let success = false;
  let error = '';
  let sending = false;

  const sendContributorRequest = async (event) => {
    event.preventDefault();
    success = false;
    error = '';
    sending = true;

    // Build dynamic email subject
    const subject = `Contribution Request Received: ${project || 'No Project Provided'}`;

    const templateParams = {
      name,
      email,
      project,
      institution,
      pi,
      url,
      comments,
      subject,                // dynamic subject line
      formType,               // 'contributor'
      isContributor: true,
      isConsultation: false
    };

    try {
      await emailjs.send(
        'service_s513c3i',    // Your EmailJS service ID
        'template_nqj4aum',   // Your EmailJS template ID
        templateParams,
        '5SbE9iKVe1cS7XMy2'   // Your EmailJS public key
      );
      success = true;
      // Reset fields
      name = email = project = institution = pi = url = comments = '';
    } catch (err) {
      error = '❌ Failed to send message. Please try again later.';
      console.error('Error:', err);
    } finally {
      sending = false;
    }
  };
</script>

<form on:submit|preventDefault={sendContributorRequest} class="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow space-y-6">
  <h2 class="text-2xl font-semibold text-gray-800">Become a Contributor</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Your Name*</label>
      <input id="name" type="text" bind:value={name} required class="mt-1 w-full rounded border border-gray-300 p-2" />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Your Email*</label>
      <input id="email" type="email" bind:value={email} required class="mt-1 w-full rounded border border-gray-300 p-2" />
    </div>
  </div>

  <div>
    <label for="project" class="block text-sm font-medium text-gray-700">Project Name*</label>
    <input id="project" type="text" bind:value={project} required class="mt-1 w-full rounded border border-gray-300 p-2" />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label for="institution" class="block text-sm font-medium text-gray-700">Institution</label>
      <input id="institution" type="text" bind:value={institution} class="mt-1 w-full rounded border border-gray-300 p-2" />
    </div>
    <div>
      <label for="pi" class="block text-sm font-medium text-gray-700">Principal Investigator</label>
      <input id="pi" type="text" bind:value={pi} class="mt-1 w-full rounded border border-gray-300 p-2" />
    </div>
  </div>

  <div>
    <label for="url" class="block text-sm font-medium text-gray-700">Project URL</label>
    <input id="url" type="url" bind:value={url} placeholder="https://example.com (optional)" class="mt-1 w-full rounded border border-gray-300 p-2" />
  </div>

  <div>
    <label for="comments" class="block text-sm font-medium text-gray-700">Additional Comments</label>
    <textarea id="comments" bind:value={comments} rows="4" class="mt-1 w-full rounded border border-gray-300 p-2"></textarea>
  </div>

  <button type="submit" class="bg-ctgorange text-white px-4 py-2 rounded hover:bg-ctgblue disabled:opacity-50" disabled={sending}>
    {sending ? 'Sending...' : 'Submit'}
  </button>

  {#if success}
    <p class="text-green-600 mt-4">✅ Your contribution request was sent successfully!</p>
  {:else if error}
    <p class="text-red-600 mt-4">{error}</p>
  {/if}
</form>

<style>
  form {
    max-width: 80vw;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input, textarea {
    padding: 0.5rem;
    font-size: 1rem;
  }
  button {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  label, p {
    color: black;
  }
</style>
