import highschool from '../assets/highschool.svg'
import cu from '../assets/cu.svg'
import liu from '../assets/liu.svg'
export const educationData = [
  {
    id: 'highschool',
    graduationYear: 2022,
    time: '2019-2022',
    institution: 'Nawaminthrachinuthit Triamudomsuksanomklao School (NTUN)',
    content: [
      'Studied in Science and Math Elective in English Program',
      'Elected as class representative consecutively for 3 years.',
      'Participated in English debate club consecutively for 3 years.',
    ],
    img: highschool,
  },
  {
    id: 'bachelor',
    graduationYear: 2026,
    time: '2022-2026',
    institution: 'Chulalongkorn University',
    content: [
      'Majored in Information and Communication Engineering',
      'Achieved first-class honors with grade point average of 3.70',
      'Passed Fundamental Data Structure and Algorithm with Grade A',
      'Passed Software Engineering with Grade A',
      'Passed Netcentric Architecture with Grade A',
      'Passed Computer Programming with Grade B+',
    ],
    img: cu,
  },
  {
    id: 'exchange',
    graduationYear: 2026,
    time: 'Exchanged semester',
    institution: 'Linköping University',
    content: [
      'Passed Software Design and Construction with distinction',
      'Passed Computer Security with distinction',
      'Passed Compiler and Interpreters with distinction',
      'Passed Software Testing with credit',
      'Passed Information Networks with credit',
    ],
    img: liu,
  },
]
