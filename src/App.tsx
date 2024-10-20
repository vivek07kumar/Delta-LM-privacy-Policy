import React from 'react';
import { Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Shield className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Delta LM Privacy Policy</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Last updated: October 20, 2024</h2>
          <p className="mb-4">
            Welcome to Delta LM ("we," "us," or "our"). Delta LM is an AI chat application designed to provide users with an interactive conversational experience. This Privacy Policy outlines how we handle your information when you use our application.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">1. Information We Do Not Collect</h3>
          <p className="mb-4">
            We respect your privacy and are committed to protecting it. We do not collect, store, or use any personal information from users of Delta LM. This means:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>No personal data such as your name, email address, phone number, or any other identifying information is required or collected.</li>
            <li>We do not collect any usage data or analytics.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-2">2. Data Processing</h3>
          <p className="mb-4">
            All AI processing is conducted locally on your device. Delta LM does not transmit any data to external servers or third-party services.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">3. Cookies and Tracking Technologies</h3>
          <p className="mb-4">
            Delta LM does not use cookies or any similar tracking technologies.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">4. Third-Party Services and SDKs</h3>
          <p className="mb-4">
            Delta LM does not integrate any third-party services or software development kits (SDKs) that collect user data.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">5. User Rights</h3>
          <p className="mb-4">
            You have the right to know that we do not collect or process any of your personal data. Your privacy is fully protected when using Delta LM.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">6. Security Measures</h3>
          <p className="mb-4">
            We implement standard security practices to protect the app from unauthorized access or use. Since all processing is done locally and no data is collected or transmitted, the risk to your data is minimized.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">7. Children's Privacy</h3>
          <p className="mb-4">
            Our application is suitable for users of all ages. We do not collect personal information from any users, including children under the age of 13. Children can safely use our app without risk to their privacy.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">8. Compliance with Laws</h3>
          <p className="mb-4">
            We are committed to complying with all applicable data protection laws and regulations, including but not limited to the General Data Protection Regulation (GDPR) and the Children's Online Privacy Protection Act (COPPA).
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">9. Changes to This Privacy Policy</h3>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we will update the "Last updated" date accordingly. We encourage you to review this Privacy Policy periodically.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">10. Accessibility of the Privacy Policy</h3>
          <p className="mb-4">
            This Privacy Policy is accessible on our Google Play Store listing.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">11. Contact Us</h3>
          <p className="mb-4">
            If you have any questions or suggestions about our Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            Email: <a href="mailto:tech.delta.ai@gmail.com" className="text-blue-600 hover:underline">tech.delta.ai@gmail.com</a>
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">12. Consent</h3>
          <p className="mb-4">
            By using Delta LM, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>
      </main>
      <footer className="bg-gray-200 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2024 Delta LM. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;