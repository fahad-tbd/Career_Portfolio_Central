import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Terms of Service</span>
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-brand-gray-700 leading-relaxed">
                By accessing and using Career Portfolio Central (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Description of Service</h2>
              <p className="text-brand-gray-700 mb-4">
                Career Portfolio Central provides an online platform that offers:
              </p>
              <ul className="list-disc pl-6 text-brand-gray-700 space-y-1">
                <li>Resume building tools and templates</li>
                <li>Portfolio showcase functionality</li>
                <li>Job search and listing services</li>
                <li>Career counselling and guidance</li>
                <li>Professional development resources</li>
                <li>Membership plans and premium features</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">User Accounts</h2>
              
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Account Creation</h3>
              <p className="text-brand-gray-700 mb-4">
                To access certain features of our service, you must create an account. You agree to provide accurate, current, and complete information 
                during the registration process and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Account Security</h3>
              <p className="text-brand-gray-700 mb-4">
                You are responsible for safeguarding the password and for all activities that occur under your account. 
                You agree to immediately notify us of any unauthorized use of your account.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Account Termination</h3>
              <p className="text-brand-gray-700">
                We reserve the right to terminate or suspend your account at any time for violations of these terms or for any other reason at our sole discretion.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">User Content and Conduct</h2>
              
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Content Ownership</h3>
              <p className="text-brand-gray-700 mb-4">
                You retain ownership of any content you submit, post, or display on our service (&quot;User Content&quot;). 
                By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Content Standards</h3>
              <p className="text-brand-gray-700 mb-4">You agree that your User Content will not:</p>
              <ul className="list-disc pl-6 text-brand-gray-700 space-y-1">
                <li>Contain false, misleading, or fraudulent information</li>
                <li>Infringe upon the rights of any third party</li>
                <li>Contain offensive, defamatory, or inappropriate material</li>
                <li>Include spam, solicitations, or commercial advertisements</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Subscription and Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Subscription Plans</h3>
              <p className="text-brand-gray-700 mb-4">
                We offer various subscription plans with different features and pricing. By subscribing to a paid plan, 
                you agree to pay the applicable fees as described in your subscription.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Billing and Renewal</h3>
              <p className="text-brand-gray-700 mb-4">
                Subscriptions are billed in advance on a recurring basis (monthly or annually). 
                Your subscription will automatically renew unless you cancel before the renewal date.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Refunds</h3>
              <p className="text-brand-gray-700 mb-4">
                We offer a 14-day money-back guarantee for new subscriptions. Refunds for other circumstances 
                are at our sole discretion and will be prorated based on unused service time.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Price Changes</h3>
              <p className="text-brand-gray-700">
                We reserve the right to modify our pricing at any time. We will provide advance notice of any price changes 
                that affect your existing subscription.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-brand-gray-700 mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive property of 
                Career Portfolio Central and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-brand-gray-700">
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Privacy and Data Protection</h2>
              <p className="text-brand-gray-700 mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information 
                when you use our service.
              </p>
              <p className="text-brand-gray-700">
                By using our service, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
              <Link href="/privacy" className="text-brand-navy hover:underline">
                Read our Privacy Policy →
              </Link>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Service Availability</h3>
              <p className="text-brand-gray-700 mb-4">
                While we strive to provide continuous service, we do not guarantee that our service will be uninterrupted, 
                timely, secure, or error-free. We reserve the right to modify or discontinue our service at any time.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Job Search Results</h3>
              <p className="text-brand-gray-700 mb-4">
                We do not guarantee that using our service will result in job offers or career advancement. 
                Job search success depends on many factors beyond our control.
              </p>

              <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-brand-gray-700">
                In no event shall Career Portfolio Central be liable for any indirect, incidental, special, consequential, 
                or punitive damages arising out of or related to your use of our service.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-brand-gray-700 mb-4">
                Our service may contain links to third-party websites or services that are not owned or controlled by us. 
                We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party services.
              </p>
              <p className="text-brand-gray-700">
                You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any third-party services.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Indemnification</h2>
              <p className="text-brand-gray-700">
                You agree to defend, indemnify, and hold harmless Career Portfolio Central and its employees, contractors, agents, 
                officers and directors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, 
                and expenses (including but not limited to attorney&apos;s fees) arising from your use of our service or violation of these terms.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Governing Law</h2>
              <p className="text-brand-gray-700">
                These terms shall be interpreted and governed by the laws of the State of California, United States, 
                without regard to its conflict of law provisions. Any legal action or proceeding arising under these terms 
                will be brought exclusively in the federal or state courts located in California.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-brand-gray-700">
                We reserve the right to modify or replace these terms at any time. If a revision is material, 
                we will provide at least 30 days notice prior to any new terms taking effect. 
                Continued use of our service after such modifications constitutes acceptance of the new terms.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold text-brand-gray-900 mb-4">Contact Information</h2>
              <p className="text-brand-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-brand-gray-700">
                <p><strong>Email:</strong> info@careerportfoliocentral.net</p>
                <p><strong>Address:</strong> A-610 WORLD TRADE TOWER BEHIND SKODA SHOWROOM VILLAGE MAKARBA, TALUKA AHMEDABAD CITY-380051</p>
                {/* <p><strong>Phone:</strong> 1-800-CAREER-1</p> */}
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
