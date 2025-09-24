import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p className="text-xl text-brand-gray-600">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-brand-gray-700 leading-relaxed">
                At Career Portfolio Central, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Personal Information</h3>
              <p className="text-brand-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 text-brand-gray-700 mb-6 space-y-1">
                <li>Name, email address, and contact information</li>
                <li>Professional information (work experience, education, skills)</li>
                <li>Resume and portfolio content</li>
                <li>Account credentials and preferences</li>
                <li>Payment information for premium services</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Usage Information</h3>
              <p className="text-brand-gray-700 mb-4">We automatically collect certain information about your device and usage:</p>
              <ul className="list-disc pl-6 text-brand-gray-700 space-y-1">
                <li>IP address, browser type, and operating system</li>
                <li>Pages visited and time spent on our platform</li>
                <li>Search queries and interaction patterns</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-brand-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-brand-gray-700 space-y-1">
                <li>Provide and improve our services</li>
                <li>Create and manage your account</li>
                <li>Process payments and transactions</li>
                <li>Send important updates and communications</li>
                <li>Personalize your experience and job recommendations</li>
                <li>Analyze usage patterns to enhance our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">With Your Consent</h3>
              <p className="text-brand-gray-700 mb-4">
                We may share your portfolio and resume information with potential employers when you explicitly choose to apply for jobs or make your profile visible to recruiters.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Service Providers</h3>
              <p className="text-brand-gray-700 mb-4">
                We may share information with trusted third-party service providers who assist us in operating our platform, processing payments, or providing customer support.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-brand-gray-700">
                We may disclose information if required by law, court order, or to protect the rights, property, or safety of Career Portfolio Central, our users, or others.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Data Security</h2>
              <p className="text-brand-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul className="list-disc pl-6 text-brand-gray-700 space-y-1">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-brand-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-brand-gray-700 space-y-1">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Limit how we process your information</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-brand-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences. 
                Types of cookies we use include:
              </p>
              <ul className="list-disc pl-6 text-brand-gray-700 space-y-1">
                <li><strong>Essential cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics cookies:</strong> Help us understand site usage</li>
                <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-brand-gray-700">
                If you are located outside the United States, please note that we may transfer your information to the United States or other countries 
                for processing. We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-brand-gray-700">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-brand-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page 
                and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Contact Us</h2>
              <p className="text-brand-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-brand-gray-700">
                <p><strong>Email:</strong> privacy@careerportfoliocentral.net</p>
                <p><strong>Address:</strong> Career Portfolio Central, Privacy Department</p>
                <p><strong>Phone:</strong> 1-800-CAREER-1</p>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="text-brand-navy hover:underline">
                  Contact our support team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
