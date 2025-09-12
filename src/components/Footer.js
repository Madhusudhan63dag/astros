/* Footer */
function Footer({ lang }) {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-gray-700">
              © 2025 Maharashtra Agro Multi State Cooperative Society Ltd. All Rights Reserved.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              {lang === "mr"
                ? "सोशल: Facebook | Instagram | WhatsApp"
                : "Social: Facebook | Instagram | WhatsApp"}
            </p>
          </div>
          <div className="text-sm text-gray-700">
            <p>Email: info@maharashtraagro.com</p>
            <p>Phone: +91 90665 15656</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;