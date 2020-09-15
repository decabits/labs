import logomakerimage from "../assets/Logomaker_LabDecabits.png";
import ntimage from "../assets/NotificationTrapper__logo.png";
import ntmainimage from "../assets/Notification-Trapper_design.png";
import logomakermainimg from "../assets/Labdecabits_Labdecabits.png";
import lmStep1 from "../assets/gif1.gif";
import lmStep2 from "../assets/gif2.gif";
import lmStep3 from "../assets/gif3.gif";
import lmstep1 from "../assets/Gif1trapper.gif";
import lmstep2 from "../assets/Gif2trapper.gif";
import lmstep3 from "../assets/Gif3trapper.gif";



export default [
    {
        img: logomakerimage,
        pname: "Logo Maker",
        rating: 4,
        numberOfPeopleRated: 143,
        tagline: "Make your own unique logo for free ",
        tags: ["Vue.js", "HTML", "CSS", "Fabric.js"],
        categories: "Logomaker , Web Service",
        review: ["Good", "Awesome", "Loved it", "Not Good"],
        website:"website:",
        websitelink:"https://logomaker.decabits.com/",
         
        description: {
            mainImage: logomakermainimg,
            paragraphs: [
                `Our foremost project at labs decabits is created with a vision to help
                other startups to flourish & grow with minimal investment. To begin
                with, we want to provide our customers with utmost convenience.`,
                `Any consumer who wants to explore & design logomakes can begin with
                selecting/outlining a company name followed by picking fonts & case. The
                next step for creating the perfect trademark is connecting symbolic
                shades & colors to it. Move further by determining & specifying
                meaningful icons for a pleasing layout.`,
                `Our high tech team of designers & developers have collaborated to
                fabricate the flawless logomakes. With frontend technology like Vue.JS,
                HTML & CSS- the project was set up & completed with precision & fruitful
                results. Apart from the basic technologies & coding, a very special part
                & copart of this project is contributed by an inbuilt canvas library
                called Fabric.JS. A powerful & simple library to build SVGs. With an
                easy yet robust tech stack, Labs.decabits delivered its very first open
                source tool for going live.`,
                `A noteworthy detail & feature makes its free download service of the
                logos, in all formats like PNG, JPEG & SVG (With or without background)`,
                ` Any logo the consumer may create will directly be saved in the
                galleries, even if you are halfway through. Once you want to get back to
                the design, with a single click the consumer will be redirected to an
                editable file for making the needful alterations.`
            ],
            steps: [
                {
                    image: lmStep1
                },
                {
                    image: lmStep2
                },
                {
                    image: lmStep3
                }
            ]
        }
      },
      {
        img: ntimage,
        pname: "Notification trapper",
        rating: 4,
        numberOfPeopleRated: 143,
        tagline: "One Stop Solution for Accessing all your Testing Emails! ",
        tags: ["E-mail", "SMS", "Inbox"],
        categories: "NotificationTrapper , Web Service",
        review: ["Good", "Awesome", "Loved it", "Not Good"],
        website:"website:",
        websitelink:"https://logomaker.decabits.comhttp://notification-trapper.herokuapp.com/",
        description: {
            mainImage: ntmainimage,
            paragraphs: [
                `Notification Trapper by Decabits, is a self-curated tool by this startup based in New Delhi focussing to provide an easy to use tool for testing SMS/email before sending out the real text message. The tool provides robust functionality of rerouting all testing mails & messages to the notification trapper’s inbox.
                `,
                `The tool is free of charge for storing up to 1000 mails/SMS. It provides a dedicated & safe environment during staging and/or development for email and SMS testing with proficiency. `,
                `It avoids sending test email/SMS to a real user inbox. So, perfectly crafted templates reach your clients giving an edge cutting highlight to your functionality. 
                Some testers, project managers & even developers have had their mail ids blocked with rigorous quality assurance checks for registration & verification notification to reach users. Well, Notification trapper ensures no usage of spam filters again or any possibility of ids being blocked as mails & messages are now driven to a sole testing purpose inbox.`,
                `This product is inspired by the needs, experiences, and challenges faced by QA specialists at Decabits, who have been at the helm of the industry for years now. The development team has tried to cater to the needs of  QA specialists with full attention to detail. Share the power that Notification Trapper brings with every QA, project manager, and developer out there at zero cost as the startup makes it open-source magic!`,
                
            ],
            steps: [
                {
                    image: lmstep1
                },
                {
                    image: lmstep2
                },
                {
                    image: lmstep3
                }
            ]
        }
      },
  ]