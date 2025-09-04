import React, { useState, useEffect } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Generate time slots in 12-hour format
  const timeSlots = Array.from({ length: (9 * 60 - 18 * 60) / -15 }, (_, i) => {
    const totalMins = 9 * 60 + i * 15;
    const hour = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    const displayMins = mins === 0 ? "00" : mins;
    return `${displayHour}:${displayMins} ${period}`;
  });

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Macedonia",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Réunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela, Bolivarian Republic of",
    "Viet Nam",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const phoneCodes = [
    "+93",
    "+355",
    "+213",
    "+1 684",
    "+376",
    "+244",
    "+1 264",
    "+672",
    "+1 268",
    "+54",
    "+374",
    "+297",
    "+61",
    "+43",
    "+994",
    "+1 242",
    "+973",
    "+880",
    "+1 246",
    "+375",
    "+32",
    "+501",
    "+229",
    "+1 441",
    "+975",
    "+591",
    "+387",
    "+267",
    "+47",
    "+55",
    "+246",
    "+673",
    "+359",
    "+226",
    "+257",
    "+238",
    "+855",
    "+237",
    "+1",
    "+1 345",
    "+236",
    "+235",
    "+56",
    "+86",
    "+61",
    "+61",
    "+57",
    "+269",
    "+242",
    "+243",
    "+682",
    "+506",
    "+385",
    "+53",
    "+599",
    "+357",
    "+420",
    "+45",
    "+253",
    "+1 767",
    "+1 809",
    "+593",
    "+20",
    "+503",
    "+240",
    "+291",
    "+372",
    "+268",
    "+251",
    "+500",
    "+298",
    "+679",
    "+358",
    "+33",
    "+594",
    "+689",
    "+262",
    "+241",
    "+220",
    "+995",
    "+49",
    "+233",
    "+350",
    "+30",
    "+299",
    "+1 473",
    "+590",
    "+1 671",
    "+502",
    "+44 1481",
    "+224",
    "+245",
    "+592",
    "+509",
    "+672",
    "+379",
    "+504",
    "+852",
    "+36",
    "+354",
    "+91",
    "+62",
    "+98",
    "+964",
    "+353",
    "+44 1624",
    "+972",
    "+39",
    "+1 876",
    "+81",
    "+44 1534",
    "+962",
    "+7",
    "+254",
    "+686",
    "+850",
    "+82",
    "+965",
    "+996",
    "+856",
    "+371",
    "+961",
    "+266",
    "+231",
    "+218",
    "+423",
    "+370",
    "+352",
    "+853",
    "+261",
    "+265",
    "+60",
    "+960",
    "+223",
    "+356",
    "+692",
    "+596",
    "+222",
    "+230",
    "+262",
    "+52",
    "+691",
    "+373",
    "+377",
    "+976",
    "+382",
    "+1 664",
    "+212",
    "+258",
    "+95",
    "+264",
    "+674",
    "+977",
    "+31",
    "+687",
    "+64",
    "+505",
    "+227",
    "+234",
    "+683",
    "+672",
    "+389",
    "+1 670",
    "+47",
    "+968",
    "+92",
    "+680",
    "+970",
    "+507",
    "+675",
    "+595",
    "+51",
    "+63",
    "+64",
    "+48",
    "+351",
    "+1 787",
    "+974",
    "+262",
    "+40",
    "+7",
    "+250",
    "+590",
    "+290",
    "+1 869",
    "+1 758",
    "+590",
    "+508",
    "+1 784",
    "+685",
    "+378",
    "+239",
    "+966",
    "+221",
    "+381",
    "+248",
    "+232",
    "+65",
    "+1 721",
    "+421",
    "+386",
    "+677",
    "+252",
    "+27",
    "+500",
    "+211",
    "+34",
    "+94",
    "+249",
    "+597",
    "+47",
    "+46",
    "+41",
    "+963",
    "+886",
    "+992",
    "+255",
    "+66",
    "+670",
    "+228",
    "+690",
    "+676",
    "+1 868",
    "+216",
    "+90",
    "+993",
    "+688",
    "+256",
    "+380",
    "+971",
    "+44",
    "+1",
    "+598",
    "+998",
    "+678",
    "+58",
    "+84",
    "+212",
    "+967",
    "+260",
    "+263",
  ];

  const currencyCodes = [
    "AFN",
    "ALL",
    "DZD",
    "USD",
    "EUR",
    "AOA",
    "XCD",
    null,
    "XCD",
    "ARS",
    "AMD",
    "AWG",
    "AUD",
    "EUR",
    "AZN",
    "BSD",
    "BHD",
    "BDT",
    "BBD",
    "BYN",
    "EUR",
    "BZD",
    "XOF",
    "BMD",
    "BTN",
    "BOB",
    "BAM",
    "BWP",
    "NOK",
    "BRL",
    "USD",
    "BND",
    "BGN",
    "XOF",
    "BIF",
    "CVE",
    "KHR",
    "XAF",
    "CAD",
    "KYD",
    "XAF",
    "XAF",
    "CLP",
    "CNY",
    "AUD",
    "AUD",
    "COP",
    "KMF",
    "XAF",
    "CDF",
    "NZD",
    "CRC",
    "EUR",
    "CUP",
    "ANG",
    "EUR",
    "CZK",
    "DKK",
    "DJF",
    "XCD",
    "DOP",
    "USD",
    "EGP",
    "USD",
    "XAF",
    "ERN",
    "EUR",
    "SZL",
    "ETB",
    "FKP",
    "DKK",
    "FJD",
    "EUR",
    "EUR",
    "EUR",
    "XPF",
    "EUR",
    "XAF",
    "GMD",
    "GEL",
    "EUR",
    "GHS",
    "GIP",
    "EUR",
    "DKK",
    "XCD",
    "EUR",
    "USD",
    "GTQ",
    "GBP",
    "GNF",
    "XOF",
    "GYD",
    "HTG",
    "AUD",
    "EUR",
    "HNL",
    "HKD",
    "HUF",
    "ISK",
    "INR",
    "IDR",
    "IRR",
    "IQD",
    "EUR",
    "GBP",
    "ILS",
    "EUR",
    "JMD",
    "JPY",
    "GBP",
    "JOD",
    "KZT",
    "KES",
    "AUD",
    "KPW",
    "KRW",
    "KWD",
    "KGS",
    "LAK",
    "EUR",
    "LBP",
    "LSL",
    "LRD",
    "LYD",
    "CHF",
    "EUR",
    "EUR",
    "MOP",
    "MGA",
    "MWK",
    "MYR",
    "MVR",
    "XOF",
    "EUR",
    "USD",
    "MRU",
    "MUR",
    "EUR",
    "MXN",
    "USD",
    "MDL",
    "EUR",
    "MNT",
    "EUR",
    "XCD",
    "MAD",
    "MZN",
    "MMK",
    "NAD",
    "AUD",
    "NPR",
    "EUR",
    "XPF",
    "NZD",
    "NIO",
    "XOF",
    "NGN",
    "NZD",
    "AUD",
    "MKD",
    "USD",
    "NOK",
    "OMR",
    "PKR",
    "USD",
    "ILS",
    "PAB",
    "PGK",
    "PYG",
    "PEN",
    "PHP",
    "NZD",
    "PLN",
    "EUR",
    "USD",
    "QAR",
    "EUR",
    "RON",
    "RUB",
    "RWF",
    "EUR",
    "SHP",
    "XCD",
    "XCD",
    "EUR",
    "EUR",
    "XCD",
    "WST",
    "EUR",
    "STD",
    "SAR",
    "XOF",
    "RSD",
    "SCR",
    "SLL",
    "SGD",
    "ANG",
    "EUR",
    "EUR",
    "SBD",
    "SOS",
    "ZAR",
    "GBP",
    "SSP",
    "EUR",
    "LKR",
    "SDG",
    "SRD",
    "NOK",
    "SEK",
    "CHF",
    "SYP",
    "TWD",
    "TJS",
    "TZS",
    "THB",
    "USD",
    "XOF",
    "NZD",
    "TOP",
    "TTD",
    "TND",
    "TRY",
    "TMT",
    "AUD",
    "UGX",
    "UAH",
    "AED",
    "GBP",
    "USD",
    "UYU",
    "UZS",
    "VUV",
    "VES",
    "VND",
    "MAD",
    "YER",
    "ZMW",
    "ZWL",
  ];

  const countryData = countries.map((country, index) => ({
    country,
    phoneCode: phoneCodes[index] || "",
    currencyCode: currencyCodes[index] || "",
  }));

  return (
    <div className="relative w-full py-20 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 max-w-4xl">
        <div className="flex flex-col items-center">
          {/* Contact Form - Centered */}
          <div
            className={`w-full space-y-8 transition-all duration-700 ease-out delay-150 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Start Your Assessment
              </h2>
              <p className="text-xl text-gray-600">
                Answer 5 quick questions to see your best‑fit programs.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-5 py-4 text-black bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 text-black bg-white border border-[#1极速赛车开奖结果E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    required
                  />
                </div>
              </div>

              {/* Phone with country code dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <div className="flex">
                    <div className="w-1/3 mr-2">
                      <select
                        className="w-full px-3 py-4 text-black bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none"
                        defaultValue="+1"
                      >
                        <option value="">+ Code</option>
                        {countryData.map((item, index) => (
                          <option key={index} value={item.phoneCode}>
                            {item.phoneCode} ({item.country})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-2/3">
                      <input
                        type="tel"
                        className="w-full px-5 py-4 text-black bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality *
                  </label>
                  <select
                    className="w-full px-5 py-4 text-black bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none"
                    required
                  >
                    <option value="">Select your nationality</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-12 right-0 flex items-center justify-center px-4 text-black mt-2">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0极速赛车开奖结果l-4-极速赛车开奖结果4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Goal *
                  </label>
                  <select
                    className="w-full px-5 py-4 text-black bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453极速赛车开奖结果E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none"
                    required
                  >
                    <option value="">Select your primary goal</option>
                    <option value="U.S. residency">U.S. residency</option>
                    <option value="Canada PR">Canada PR</option>
                    <option value="EU mobility">EU mobility</option>
                    <option value="Second passport">Second passport</option>
                    <option value="Retire abroad">Retire abroad</option>
                    <option value="Digital nomad">Digital nomad</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-12 right-0 flex items-center px-4 text-black mt-2">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Budget/Income with currency dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Approx. Budget / Income
                  </label>
                  <div className="flex">
                    <div className="w-1/4 mr-2">
                      <select
                        className="w-full px-3 py-4 text-black bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none"
                        defaultValue="CAD"
                      >
                        <option value="">Currency</option>
                        {countryData.map((item, index) => (
                          <option key={index} value={item.currencyCode}>
                            {item.currencyCode} ({item.country})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-3/4">
                      <input
                        type="text"
                        placeholder="Enter amount"
                        className="w-full px-5 py-4 text-black bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferred Time to Connect - Day and Time separately */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Day to Connect
                  </label>
                  <select
                    className="w-full px-5 py-4 text-black bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                  >
                    <option value="">Select Day (Mon-Fri)</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-12 right-0 flex items-center px-4 text-black mt-2">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 极速赛车开奖结果0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time to Connect
                  </label>
                  <select
                    className="w-full px-5 py-4 text-black bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    disabled={!selectedDay}
                  >
                    <option value="">Select Time (9am-6pm)</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-12 right-0 flex items-center px-4 text-black mt-2">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="极速赛车开奖结果0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  placeholder="Any additional information you'd like to share"
                  rows="4"
                  className="w-full text-black px-5 py-4 bg-white border border-[#1E453E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                ></textarea>
              </div>

              <div className="flex items-start pt-2">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="consent-checkbox"
                    className="h-5 w-5 text-[#1E453E] focus:ring-[#1E453E] border-gray-300 rounded-md transition-all duration-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent-checkbox" className="text-gray-700">
                    I agree to the Privacy Policy and to be contacted by NVG and
                    its partner network.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#1E453E] hover:bg-[#2a5c52] text-white font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E453E]"
              >
                Get My Shortlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
