import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  usaCountries = ['Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    ' New Mexico',
    'New York',
    'North Carolina',
    ' North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia ',
    'Wisconsin',
    'Wyoming'];

  europeCountries = [
    'Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    ' Bosnia and Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    ' Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France- Corsica-island',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland- Dublin- largest city and capital of Ireland , Belfast is the capital and largest city of Northern Ireland',
    'Italy- Venice-capital city-Veneto-province-Italy - Italy is divided into 20 provinces (states)-',
    'Kazakhstan',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain - its autonomous communities are divided into fifty provinces- Barcelona, Madrid',
    'Sweden',
    'Switzerland- geneva-city-Switzerland-country',
    'Turkey',
    'Ukraine',
    'United Kingdom (UK or Britain or England)',
    'Vatican City (Holy See)'
  ];

  asiaCountries = [
    'Afghanistan',
    'Armenia',
    'Azerbaijan',
    'Bahrain',
    'Bangladesh',
    'Bhutan',
    'Brunei',
    'Cambodia',
    'China',
    'Cyprus',
    'Georgia',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Israel',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Lebanon',
    'Malaysia',
    'Maldives',
    'Mongolia',
    'Myanmar (Burma)',
    'Nepal',
    'North Korea',
    'Oman',
    'Pakistan',
    'Palestine',
    'Philippines',
    'Qatar',
    'Russia',
    'Saudi Arabia - (famous place- mecca)',
    'Singapore',
    'South Korea',
    'Sri Lanka',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Thailand',
    'Timor-Leste',
    'Turkey',
    'Turkmenistan',
    '  United Arab Emirates (UAE)',
    'Uzbekistan',
    'Vietnam',
    'Yemen'
  ];

  africaCountries = [
    'Algeria',
    'Angola',
    'Benin',
    'Botswana',
    'Burkina Faso',
    'Burundi',
    ' Cabo Verde',
    'Cameroon',
    'Central African Republic (CAR)',
    'Chad',
    'Comoros',
    'Democratic Republic of the Congo',
    'Republic of the Congo',
    'Cote d\'Ivoire',
    'Djibouti',
    'Egypt',
    'Equatorial Guinea',
    'Eritrea',
    'Ethiopia',
    'Gabon',
    'Gambia',
    'Ghana',
    'Guinea',
    'Guinea-Bissau',
    'Kenya',
    'Lesotho',
    'Liberia',
    'Libya',
    'Madagascar',
    'Malawi',
    'Mali',
    'Mauritania',
    'Mauritius',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Niger',
    'Nigeria',
    'Rwanda',
    'Sao Tome and Principe',
    'Senegal',
    'Seychelles',
    'Sierra Leone',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Sudan',
    'Swaziland',
    'Tanzania',
    'Togo',
    'Tunisia',
    'Uganda',
    'Zambia',
    'Zimbabwe'
  ];

  northCOuntries = [
    'Antigua and Barbuda',
    'bahamas',
    'barbodas',
    'belize',
    'canada',
    'costa Rica',
    'cuba',
    'Dominican',
    'dominician republic',
    'el Salvador',
    'grenada',
    'guatemala',
    'haiti',
    'honduras',
    'jamaica',
    'mexico',
    'nicaragua',
    'panama',
    'st.kittis and Nevis',
    'st.lucia',
    ' st.vincent and the Grenadines',
    'Trinidad and Tobago',
    'usa'
  ];

  southCountries = [
    'Argentina',
    'bolivia',
    'brazil',
    'chile',
    'Columbia',
    'ecuador',
    'guyana',
    'paraguay',
    'peru',
    'suriname',
    'uruguay',
    'venezuela'
  ];



  ausStates = [
    'New South Wales',
    ' Queensland',
    'South Australia',
    'Tasmania',
    'Victoria',
    'Western Australia',
    'Australian Capital Territory',
    'Jervis Bay Territory',
    'Northern Territory',
  ];

  germnyStates = [
    'Baden-Württemberg',
    'Bavaria',
    'Berlin',
    'Brandenburg',
    'Bremen',
    'Hamburg',
    'Hesse',
    'Lower Saxony',
    'Mecklenburg-Vorpommern',
    'North Rhine-Westphalia',
    'Rhineland-Palatinate',
    'Saarland',
    'Saxony',
    'Saxony-Anhalt',
    'Schleswig-Holstein',
    'Thuringia'
  ];

  netherlandpro = [
    'North Holland',
    'Drenthe',
    'Flevoland',
    'Friesland',
    'Gelderland',
    'Groningen',
    'Limburg',
    'North Brabant',
    'North Holland',
    'Overijssel',
    'South Holland',
    'Utrecht',
  ];

}

// India is divided into six regions-
// Central India	2	-              (Chhattisgarh and Madhya Pradesh)
// East India	4	1              (Bihar, Jharkhand, West Bengal, Odisha)
// North India	7	2              (UP, Haryana, Himachal Pradesh, Jammu and Kashmir, Punjab, Rajasthan, Uttrakhand)
// Northeast India 8	-              (Seven Sister States (Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura), and the Himalayan state of .Sikkim)
// South India	5	2              (Andhra Pradesh, Karnataka, Kerala, Tamil Nadu and Telangana)
// Western India   3       2              (Goa, Gujarat, and Maharashtra)

// There is 75 district in up.

// city                         state
// Ajmer                         rajasthan
// Ayodhya               	      U.P
// Azamgarh          	      U.P
// Banglore(capital)     	      Karnataka 	ISRO- Banglore (Banglore is the silicon valley of India).

// BHUBNESHWAR                   Odhisa
// Budaun                        U.P
// chennai(madras)(capital)      Tamilnadu
// coimbatore                    Tamilnadu
// Darjeling                     westbengal
// etawah                        up
// ghazipur                      up
// Guwhati(largest)              Assam
// HARIDWAR                      uttrakhand
// Hyderabad                     Telangana
// Indore                        madhyapradesh
// jaipur(capital)               rajasthan
// jalandhar                     punjab
// jhansi                        up
// kharagpur                     westbengal
// kolhapur                      maharashtra
// kolkata(calcutta)(capital)    westbengal
// kota                          Rajasthan
// Manipal                       Karnataka
// Manglore(port city)           Karnataka
// Muzaffarnagar(delhi ncr)      Up
// ooty(hillstation)             tamilnadu
// panchkula                     haryana
// pune                          maharashtra
// Raipur(capital)               chattishgarh
// rohtak                        haryana
// sonipat                       haryana
// srinagar-indian administered state-j&k
// surat                         gujrat
// udaipur                       Rajasthan
// vijayawada                    andhrapradesh
// Visakhapatnam                 andhrapradesh




// North-Holland-state-Amsterdam-capital city-Netherland-country
// holland or Netherland-12 province
// 1.	Drenthe
// 2.	Flevoland
// 3.	Friesland
// 4.	Gelderland
// 5.	Groningen
// 6.	Limburg
// 7.	North Brabant
// 8.	North-Holland
// 9.	Overijssel
// 10.	South Holland
// 11.	Utrecht
// 12.	Zeeland


// Beijing-capital-china
// Hongkong-special administrative system-china
// Tibet-autonomous region -china

/*----America----*/
// boston-city-massachussetes-state-usa
// silicon valley- southern portion-san fransico-city-california(CA)-usa
// san diego-city-california-state-usa
// sunnyvale-city-california-state-usa
// san francisco-hilly city-northern california-state-USA
// los angeles-city-california-state-usa
// newyork state-usa
// denver city-colorado state-usa
// columbus city-ohio state-usa
// Anchorage city-alaska state-usa
// Lansing city-michigan  state-usa
// Honolulu city-hawaii state-usa
// Miami city-florida state-usa
// Seattle city-washington state-usa (NASA- Washington D.C)
// Salt Lake City-utah state-usa
// Des Moines City-iowa state-usa
// Lincoln City-nebraska state-usa
// birmingham City-alabama state-usa
// Las Vegas City-nevada state-usa
// area51-airbase-nevada-state-usa
// Tulsa City-oklahoma state-usa
// Wichita City-kansas state-usa
// Portland City-oregon state-usa
// Montpelier City-vermont state-usa
// houston City-texas state-usa
// phoenix City-arizona state-usa
// baltimore-city-Maryland-state-usa

// Cambridge-city-England (UK)
// (UK or Britain or England)-
// London is the capital and largest city of England and the United Kingdom.
// Scotland is a part of the UK and its capital is Edinburgh.
// york is a walled city in northeast England.
// England is divided into 9 governmental regions-
// 1.	South West
// 2.	South East
// 3.	London
// 4.	East of England
// 5.	Yorkshire and the Humber
// 6.	West Midlands
// 7.	East Midlands
// 8.	North West
// 9.	North East

// Auckland-city-Newzealand

// Australia -6 federal states
// New South Wales
// Queensland
// South Australia
// Tasmania
// Victoria
// Western Australia
// -3 territories
// Australian Capital Territory
// Jervis Bay Territory
// Northern Territory

// Germany-16 states
// Baden-Württemberg
// Bavaria
// Berlin
// Brandenburg
// Bremen
// Hamburg
// Hesse
// Lower Saxony
// Mecklenburg-Vorpommern
// North Rhine-Westphalia
// Rhineland-Palatinate
// Saarland
// Saxony
// Saxony-Anhalt
// Schleswig-Holstein
// Thuringia

