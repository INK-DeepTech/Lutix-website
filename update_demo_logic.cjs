const fs = require('fs');
let code = fs.readFileSync('src/components/DemoRequestPage.tsx', 'utf8');

// The function currently looks like:
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   const errors: { email?: string; name?: string; org?: string } = {};
//
//   if (!formData.fullName.trim()) errors.name = 'Name is required';
//   if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) errors.email = 'Valid email is required';
//   if (!formData.organization.trim()) errors.org = 'Organization is required';
//
//   if (Object.keys(errors).length === 0) {
//      // it probably just does setIsSubmitted(true) right now
//   }

code = code.replace(
  /const handleSubmit = async \(e: React\.FormEvent\) => \{[\s\S]*?setIsSubmitted\(true\);\s*\n\s*\} else \{\s*\n\s*setFormErrors\(errors\);\s*\n\s*\}/,
  `const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; name?: string; org?: string } = {};

    if (!formData.fullName.trim()) errors.name = 'Name is required';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) errors.email = 'Valid email is required';
    if (!formData.organization.trim()) errors.org = 'Organization is required';

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
            subject: 'New Demo Request',
            to: 'lutixdeeptech@gmail.com',
            phone: '+917397767430',
            ...formData
          })
        });
        if (response.ok) {
           setIsSubmitted(true);
        }
      } catch (err) {
         console.error(err);
      }
    } else {
      setFormErrors(errors);
    }`
);

fs.writeFileSync('src/components/DemoRequestPage.tsx', code);
