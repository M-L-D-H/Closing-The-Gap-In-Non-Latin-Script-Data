<script>
    import emailjs from '@emailjs/browser';
  
    let name = '';
    let email = '';
    let institution = '';
    let role = '';
    let projectTitle = '';
    let projectDescription = '';
    let discipline = '';
    let geoTemporalFocus = '';
    /** @type {string[]} */
    let supportNeeds = [];
    let supportOther = '';
    let consultationGoals = '';
    let dhExperience = '';
    let toolsUsed = '';
    let followUpMethod = '';
    let preferredTimes = '';
    let comments = '';
    const formType = 'consultation';
  
    let success = false;
    let error = '';
    let sending = false;
  
    /** @param {Event} event */
    const sendConsultationRequest = async (event) => {
      event.preventDefault();
      success = false;
      error = '';
      sending = true;
  
      // Build dynamic email subject
      const subject = `Consultation Request Received: ${projectTitle || 'No Title Provided'}`;
  
      const templateParams = {
        name,
        email,
        institution,
        role,
        projectTitle,
        projectDescription,
        discipline,
        geoTemporalFocus,
        supportNeeds: supportNeeds.join(', '),
        supportOther,
        consultationGoals,
        dhExperience,
        toolsUsed,
        followUpMethod,
        preferredTimes,
        comments,
        subject,
        formType,
        isContributor: false,
        isConsultation: true
      };
  
      try {
        await emailjs.send(
          'service_s513c3i',
          'template_nqj4aum',
          templateParams,
          '5SbE9iKVe1cS7XMy2'
        );
        success = true;
        // Reset fields
        name = email = institution = role = projectTitle = projectDescription = '';
        discipline = geoTemporalFocus = supportOther = consultationGoals = '';
        dhExperience = toolsUsed = followUpMethod = preferredTimes = comments = '';
        supportNeeds = [];
      } catch (err) {
        error = '❌ Failed to send message. Please try again later.';
        console.error('Error:', err);
      } finally {
        sending = false;
      }
    };
  </script>
  
  <form on:submit|preventDefault={sendConsultationRequest} class="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow space-y-6">
    <h2 class="text-2xl font-semibold text-gray-800">Consultation Request Form</h2>
  
    <!-- Personal Info -->
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
  
    <!-- Institution & Role -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="institution" class="block text-sm font-medium text-gray-700">Institution</label>
        <input id="institution" type="text" bind:value={institution} class="mt-1 w-full rounded border border-gray-300 p-2" />
      </div>
      <div>
        <label for="role" class="block text-sm font-medium text-gray-700">Role / Position</label>
        <input id="role" type="text" bind:value={role} class="mt-1 w-full rounded border border-gray-300 p-2" />
      </div>
    </div>
  
    <!-- Project Title & Description -->
    <div>
      <label for="projectTitle" class="block text-sm font-medium text-gray-700">Project Title</label>
      <input id="projectTitle" type="text" bind:value={projectTitle} class="mt-1 w-full rounded border border-gray-300 p-2" />
    </div>
    <div>
      <label for="projectDescription" class="block text-sm font-medium text-gray-700">Project Description</label>
      <textarea id="projectDescription" bind:value={projectDescription} rows="4" class="mt-1 w-full rounded border border-gray-300 p-2"></textarea>
    </div>
  
    <!-- Discipline & Geo-Temporal Focus -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="discipline" class="block text-sm font-medium text-gray-700">Discipline / Field</label>
        <input id="discipline" type="text" bind:value={discipline} class="mt-1 w-full rounded border border-gray-300 p-2" />
      </div>
      <div>
        <label for="geoTemporalFocus" class="block text-sm font-medium text-gray-700">Geographic / Temporal Focus</label>
        <input id="geoTemporalFocus" type="text" bind:value={geoTemporalFocus} class="mt-1 w-full rounded border border-gray-300 p-2" />
      </div>
    </div>
  
    <!-- Support Needs -->
    <div>
      <label class="block text-sm font-medium text-gray-700">What kind of support are you looking for?*</label>
      <div class="mt-2 space-y-1 text-sm text-gray-700">
        <label class="block"><input type="checkbox" value="Finding related DH projects" bind:group={supportNeeds} /> Finding related DH projects</label>
        <label class="block"><input type="checkbox" value="Technical guidance" bind:group={supportNeeds} /> Technical guidance</label>
        <label class="block"><input type="checkbox" value="Connecting with DH scholars" bind:group={supportNeeds} /> Connecting with DH scholars</label>
        <label class="block"><input type="checkbox" value="Feedback on project design" bind:group={supportNeeds} /> Feedback on project design</label>
        <label class="block"><input type="checkbox" value="Other" bind:group={supportNeeds} /> Other</label>
      </div>
    </div>
  
    {#if supportNeeds.includes('Other')}
      <div>
        <label for="supportOther" class="block text-sm font-medium text-gray-700">If Other, please specify:</label>
        <input id="supportOther" type="text" bind:value={supportOther} class="mt-1 w-full rounded border border-gray-300 p-2" />
      </div>
    {/if}
  
    <!-- Consultation Goals -->
    <div>
      <label for="consultationGoals" class="block text-sm font-medium text-gray-700">What do you hope to get from this consultation?*</label>
      <textarea id="consultationGoals" bind:value={consultationGoals} required rows="3" class="mt-1 w-full rounded border border-gray-300 p-2"></textarea>
    </div>
  
    <!-- DH Experience -->
    <div>
      <label for="dhExperience" class="block text-sm font-medium text-gray-700">Digital Humanities Experience*</label>
      <select id="dhExperience" bind:value={dhExperience} required class="mt-1 w-full rounded border border-gray-300 p-2">
        <option value="">-- Select --</option>
        <option value="Software Developer">Software Developer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Digital Archivist">Digital Archivist</option>
        <option value="GIS Specialist">GIS Specialist</option>
        <option value="Coding / Programming">Coding / Programming</option>
        <option value="Project Manager (DH)">Project Manager (DH)</option>
      </select>
    </div>
  
    <!-- Tools or Methods Used -->
    <div>
      <label for="toolsUsed" class="block text-sm font-medium text-gray-700">Tools or Methods Used</label>
      <input id="toolsUsed" type="text" bind:value={toolsUsed} placeholder="e.g., Voyant, GIS, Python" class="mt-1 w-full rounded border border-gray-300 p-2" />
    </div>
  
    <!-- Follow-Up Method -->
    <div>
      <label class="block text-sm font-medium text-gray-700">Preferred Follow-Up Method</label>
      <div class="mt-1 space-x-4 text-sm text-gray-700">
        <label><input type="radio" name="followUpMethod" value="Email reply" bind:group={followUpMethod} /> Email</label>
        <label><input type="radio" name="followUpMethod" value="Video call" bind:group={followUpMethod} /> Video call</label>
        <label><input type="radio" name="followUpMethod" value="Flexible" bind:group={followUpMethod} /> I'm flexible</label>
      </div>
    </div>
  
    <!-- Preferred Times -->
    <div>
      <label for="preferredTimes" class="block text-sm font-medium text-gray-700">Preferred Days / Times</label>
      <input id="preferredTimes" type="text" bind:value={preferredTimes} class="mt-1 w-full rounded border border-gray-300 p-2" />
    </div>
  
    <!-- Additional Comments -->
    <div>
      <label for="comments" class="block text-sm font-medium text-gray-700">Additional Comments</label>
      <textarea id="comments" bind:value={comments} rows="2" class="mt-1 w-full rounded border border-gray-300 p-2"></textarea>
    </div>
  
    <!-- Submit -->
    <button type="submit" class="bg-ctgorange text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50" disabled={sending}>
      {sending ? 'Sending...' : 'Submit'}
    </button>
  
    <!-- Status Messages -->
    {#if success}
      <p class="text-green-600 mt-4">✅ Your consultation request was sent successfully!</p>
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
    input, textarea, select {
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