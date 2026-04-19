import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../ui/button';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const onSubmit = async (data) => {
    if (!captchaToken) {
      setSubmitStatus({ type: 'error', message: 'Please complete the reCAPTCHA.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const templateParams = {
        name: data.name,
        email: data.email || 'Not provided',
        phone: data.phone || 'Not provided',
        message: data.message,
        'g-recaptcha-response': captchaToken,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      reset();
      setCaptchaToken(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact</h2>
        <p className="text-gray-600 text-center mb-12">
          Have a question or ready to get started? I'm ready to help.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <p className="text-sm text-gray-500 italic mb-2">
            * Please provide either an email address or a phone number so I can reach back out to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                {...register('email', {
                  validate: (value, formValues) => {
                    if (!value && !formValues.phone) {
                      return 'Either an email or a phone number is required';
                    }
                    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                      return 'Please enter a valid email address';
                    }
                    return true;
                  }
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                {...register('phone', {
                  validate: (value, formValues) => {
                    if (!value && !formValues.email) {
                      return 'Either an email or a phone number is required';
                    }
                    return true;
                  }
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your message"
              rows="6"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "YOUR_RECAPTCHA_SITE_KEY"}
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />
          </div>

          {submitStatus && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
}
