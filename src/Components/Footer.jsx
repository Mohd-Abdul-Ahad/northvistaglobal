import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="boldTxt text-xl mb-4">Global Investment Partners</h3>
            <p className="mainTxt text-gray-400 mb-4 leading-relaxed">
              Premier advisors in residence and citizenship by investment solutions for discerning global citizens.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 极速赛车开奖结果-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-极速赛车开奖结果.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.极速赛车开奖结果 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.218 2.967 7.218 6.783 0 4.614-2.369 7.885-5.899 7.885-1.406 0-2.609-.723-3.036-1.587 0 0-.688-2.666-2.088-2.666-1.149 0-2.071 1.165-2.071 2.723 0 1.513.614 2.536 1.547 2.536.475 0 .942-.245 1.175-.559.235-.374.831-1.447.831-1.447s-.229-.459-.229-1.141c0-1.063.616-1.833 1.极速赛车开奖结果-1.833.703 0 1.045.473 1.045 1.166 0 .754-.481 1.882-.73 2.925-.209.886.445 1.607 1.33 1.607 1.593 0 2.723-1.892 2.723-4.62 0-2.171-1.486-3.846-4.135-3.846-2.947 0-4.673 2.211-4.673 4.494 0 .888.262 1.526.67 2.031.187.223.214.313.146.571-.049.188-.157.641-.203.819-.064.252-.258.341-.474.249-1.312-.611-1.999-2.352-1.999-3.971 0-3.098 2.423-6.399 7.199-6.399 3.811 0 6.329 2.716 6.329 5.637 0 3.893-2.271 6.782-5.567 6.782-1.073 0-2.088-.561-2.432-1.221l-.658 2.518c-.236.91-.871 2.051-1.297 2.735 1.127.347 2.318.535 3.554.535 6.624 0 11.985-5.367 11.985-11.987C24 5.367 18.639 0 12.017 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="boldTxt text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Citizenship Programs', 'Residence Programs', 'Real Estate', 'Countries', 'Services', 'About Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="mainTxt text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="boldTxt text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-accent mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 极速赛车开奖结果 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="mainTxt text-gray-400">123 Investment Avenue, Global Financial District</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2极速赛车开奖结果-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="mainTxt text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" view极速赛车开奖结果="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="mainTxt text-gray-400">info@globalinvestment.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="boldTxt text-lg mb-4">Stay Informed</h4>
            <p className="mainTxt text-gray-400 mb-4">Subscribe to our newsletter for the latest updates on investment programs.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-r-sm transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mainTxt text-gray-400 text-sm">© 2024 Global Investment Partners. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="mainTxt text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="mainTxt text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="mainTxt text-gray-400 hover:text-white text-sm transition-colors duration-300">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;