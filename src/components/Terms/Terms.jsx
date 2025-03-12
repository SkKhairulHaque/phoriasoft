
import NaveBar from "../naveBar/NaveBar";
import Footer from "../footer/Footer";

const Terms = () => {
  return (
    <>
    <NaveBar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-2">Last Updated: 10-03-2024</p>

        <p className="mb-4">
          Welcome to Phoriasoft! Before using our digital marketing services,
          please carefully read the following terms and conditions. By accessing
          our website and services, you agree to abide by these terms.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Use of Services</h2>
        <ul className="list-disc ml-6">
          <li>
            Phoriasoft provides various digital marketing solutions to clients
            through our website and services.
          </li>
          <li>
            By using our services, you agree to comply with all applicable laws
            and regulations.
          </li>
          <li>
            Any misuse, unethical, or illegal activity related to our services
            is strictly prohibited.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">2. Accounts and Security</h2>
        <ul className="list-disc ml-6">
          <li>Some of our services may require you to create an account.</li>
          <li>
            You are responsible for maintaining the security of your account.
          </li>
          <li>
            If you suspect unauthorized access to your account, you must notify
            us immediately.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">3. Payments and Pricing</h2>
        <ul className="list-disc ml-6">
          <li>
            The fees for Phoriasoft services will be clearly stated before
            purchase.
          </li>
          <li>Payments must be made within the specified timeframe.</li>
          <li>
            If a payment fails for any reason, please contact us for assistance.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          4. Copyright and Intellectual Property
        </h2>
        <ul className="list-disc ml-6">
          <li>
            All content, logos, and designs on Phoriasoft are protected under
            copyright laws.
          </li>
          <li>
            Any digital content created using our services cannot be reused
            without our permission.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">5. Disclaimer</h2>
        <ul className="list-disc ml-6">
          <li>
            We strive to provide accurate and reliable services, but we cannot
            guarantee complete accuracy.
          </li>
          <li>
            Phoriasoft will not be responsible for any financial or business
            losses.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">6. Changes to Terms</h2>
        <ul className="list-disc ml-6">
          <li>
            Phoriasoft reserves the right to modify these terms and conditions
            as necessary.
          </li>
          <li>
            If any changes are made, they will be updated on our website, and
            users will be informed accordingly.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">7. Contact Us</h2>
        <p>
          If you have any questions about our terms and conditions, please reach
          out to us:
        </p>
        <p className="mt-2">
          📧 Email:{" "}
          <a href="mailto:info@phoriasoft.com" className="text-blue-600">
            info@phoriasoft.com
          </a>
        </p>
        <p>
          🌐 Website:{" "}
          <a href="https://www.phoriasoft.com" className="text-blue-600">
            www.phoriasoft.com
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
