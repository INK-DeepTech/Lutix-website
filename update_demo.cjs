const fs = require('fs');

let content = fs.readFileSync('src/components/DemoRequestPage.tsx', 'utf8');

// Replace handleSubmit
const oldHandleSubmit = `  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; name?: string; org?: string } = {};

    if (!formData.fullName.trim()) errors.name = 'Name is required';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) errors.email = 'Valid email is required';
    if (!formData.organization.trim()) errors.org = 'Organization is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);
  };`;

const newHandleSubmit = `  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; name?: string; org?: string } = {};

    if (!formData.fullName.trim()) errors.name = 'Name is required';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) errors.email = 'Valid email is required';
    if (!formData.organization.trim()) errors.org = 'Organization is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // NOTE: SMS forwarding to 7397767430 will require connecting this form submission 
    // to a Twilio API route or a Zapier webhook in the production backend.
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', // Target: lutixdeeptech@gmail.com
          name: formData.fullName,
          email: formData.workEmail,
          organization: formData.organization,
          message: formData.message,
          subject: 'New Demo Request from Lutix Website'
        })
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitted(true);
  };`;

content = content.replace(oldHandleSubmit, newHandleSubmit);

// Replace email
content = content.replace(/enterprise@lutix\.internal/g, 'lutixdeeptech@gmail.com');

fs.writeFileSync('src/components/DemoRequestPage.tsx', content);
