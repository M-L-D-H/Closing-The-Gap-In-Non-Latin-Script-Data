<script>
  import emailjs from '@emailjs/browser';

  let name = '';
  let email = '';
	let project = '';
	let institution = '';
	let pi = '';
	let url = '';
  let comments = '';
  let success = false;
  let error = '';

  const sendEmail = async (event) => {
    event.preventDefault();
    success = false;
    error = '';

    const templateParams = {
      name: name.trim(),
      email: email.trim(),
			project: project.trim(),
			institution: institution.trim(),
			pi: pi.trim(),
			url: url.trim(),
			comments: comments.trim(),
    };

    try {
      await emailjs.send(
        'service_s513c3i',     // Replace with your EmailJS service ID
        'template_nqj4aum',    // Replace with your EmailJS template ID
        templateParams,
        '5SbE9iKVe1cS7XMy2'      // Replace with your EmailJS public key (user ID)
      );
      success = true;
      name = email = message = ''; // reset fields
    } catch (err) {
      error = 'Failed to send message. Please try again.';
      console.error(err);
    }
  };
</script>

<form on:submit|preventDefault={sendEmail}>
  <label for="name">
    Your name*
  </label>
	<input id="name" type="text" bind:value={name} required />
  <label for="email">
    Your email*
  </label>
	<input id="email" type="email" bind:value={email} required />
  <label for="project">
    Project name*
  </label>
	<input id="project" type="text" bind:value={project} required />
  <label for="institution">
    Institution
  </label>
	<input id="institution" type="text" bind:value={institution} />
  <label for="pi">
    Principal investigator
  </label>
	<input id="pi" type="text" bind:value={pi} />
  <label for="url">
    Project URL
  </label>
	<input id="url" type="url" bind:value={url} placeholder="https://example.com (optional)" />
  <label for="comments">
    Comments
  </label>
	<textarea id="comments" bind:value={comments}></textarea>
  <button type="submit" class="bg-ctgorange">Submit</button>

  {#if success}
    <p>✅ Message sent successfully!</p>
  {:else if error}
    <p>❌ {error}</p>
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
		color: var(--pwa-foreground);
  }

	label, p {
		color: white;
	}
</style>



<!-- Project contribution

Name of project
Institution
PI Name
URL -->