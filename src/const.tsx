import { FaGithub, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import LogoAlliance from './assets/images/Alliance.webp';
import LCC from './assets/images/LCC.jpg';
import portfolio from './assets/images/portfolio.png';
import dota2 from './assets/images/dota2.png';
import advanceCalulator from './assets/images/advance-calculator.png';
import calulator from './assets/images/calculator.png';
import facebook from './assets/images/facebook.png';
import fakeStore from './assets/images/fake-store.png';
import WeLift from './assets/images/WeLift.png';
import OverFlow from './assets/images/Overflow.png';
import Amusement from './assets/images/amusement.gif';

const iconStyleClass: string = 'hover:scale-[1.18] size-full';

export const sections = [
    {
        name: 'Home',
        id: '/',
    },
    {
        name: 'About',
        id: 'about',
    },
    {
        name: 'Skills',
        id: 'skills',
    },
    {
        name: 'Timeline',
        id: 'timeline',
    },
    {
        name: 'Projects',
        id: 'projects',
    },
    {
        name: 'Contact',
        id: 'contact',
    },
];

export const skills = [
    {
        name: 'TypeScript',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    },
    {
        name: 'JavaScript',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    },
    {
        name: 'VBScript',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/visualbasic/visualbasic-original.svg',
    },
    {
        name: 'HTML',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    },
    {
        name: 'CSS',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    },
    {
        name: 'Bootstrap',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg',
    },
    {
        name: 'Sass',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    },
    {
        name: 'Tailwind CSS',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
        name: 'Material UI',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
    },
    {
        name: 'React',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    },
    // {
    //     name: 'Redux',
    //     link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    // },
    {
        name: 'MobX',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mobx/mobx-original.svg',
    },
    {
        name: 'NodeJS',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
        name: 'C++',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
    },
    {
        name: 'Java',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg',
    },
    {
        name: 'Spring Boot',
        link: 'https://spring.io/img/projects/spring-boot.svg',
    },
    {
        name: 'C#',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
    },
    {
        name: 'ASP.NET Core',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg',
    },
    {
        name: 'PHP',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    },
    {
        name: 'Python',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    },
    {
        name: 'MySQl',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    },
    {
        name: 'Git',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    },
    {
        name: 'SVN',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/subversion/subversion-original.svg',
    },
];

export const socials = [
    {
        name: 'github',
        link: 'https://github.com/JerryGoods',
        icon: <FaGithub className={iconStyleClass} />,
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/balladosjerryjr/',
        icon: <FaLinkedin className={iconStyleClass} />,
    },
    {
        name: 'facebook',
        link: 'https://www.facebook.com/jerry.lmao/',
        icon: <FaFacebook className={iconStyleClass} />,
    },
    {
        name: 'instagram',
        link: 'https://www.instagram.com/booldtespayb/',
        icon: <FaInstagram className={iconStyleClass} />,
    },
];

export const experiences = [
    {
        logo: LogoAlliance,
        role: 'Software Engineer',
        title: 'Alliance Software Inc.',
        description:
            'Software Engineer at Alliance Software Inc, a global IT services and solutions company. Alliance was established in 2000 and has since grown to become one of the Philippines largest and most respected independent software development outsourcing company.',
        link: 'https://alliance.com.ph/',
        tech: [
            'React',
            'TypeScript',
            'ASP.net Core',
            'C++',
            'VBScript',
            'JavaScript',
            'Git',
            'Waterfall',
        ],

        date: 'July 2022 - August 2024',
        subItems: [
            {
                position: 'Technical Specialist I',
                setup: 'On-site',
                projects: [ 	
                    {
                        description: `I was assigned to provide bank support for our Japanese client's ATMs here in the Philippines. My tasks include fixing bugs in their legacy base code and developing new functionalities based on specific bank requests. Banks: BDO, MBTC, EWB, and PNB. Also to create reports, documents, test cases, and task estimatition to check the progress and update by our japanese clients`,
                        tech: ['C++', 'HTML', 'CSS', 'VBScript', 'Git', 'SVN', 'Waterfall'],
                    },
                ],
                date: 'October 2022 - January 2024',
            },
        ],
    },
];

export const educations = [
    {
        logo: LCC,
        school: 'La Consolacion College - Isabela',
        track: 'College',
		awards: 'Best Programmer Award & Best Capstone Award',
        course: 'Bachelor of Science in Information Technology',
        tech: [
			'C',
            'C++',
            'Java',
			'HTML',
			'CSS',
			'Laravel',
			'WampServer',
            'MySQL',
            'PHP',
            'Agile',
			'Kotlin',
        ],
        date: 'June 2018 - May 2022',
    },
];
export const projects = [
    {
        name: 'Personal Portfolio',
        image: portfolio,
        about: 'My Portfolio Website is a modern, responsive web application designed to showcase my professional work and personal projects in an engaging and interactive manner. Built using a combination of cutting-edge web technologies, this project highlights my skills in web development and design.',
        tech: [
            'React',
            'TypeScript',
            'Tailwind',
            'Framer Motion',
            'Responsive ',
        ],
        date: '2024',
        links: {
            github: 'https://github.com/crljhnmngs/Portfolio',
            live: '',
        },
    },
];
