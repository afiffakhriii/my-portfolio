/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import ProjectHero from "@/components/ProjectHero";
import ProjectGallery from "@/components/ProjectGallery";


const projects: any= [
  {
    slug: "plantme",
    title: "PLANTME",
    description:
      "PlantMe is an app designed to help plant enthusiasts easily identify and care for their plants. Simply snap a photo, and Plantm's advanced algorithm—powered by deep learning and convolutional neural networks (CNNs)—will instantly recognize the plant. It then provides detailed care instructions, including sunlight needs, watering schedules, and fertilizer recommendations.",
    tech: ["Kotlin", "CNN", "Firebase", "Android"],
    images: [
      { src: "/images/plantme1.png", caption: "The landing page of the Plantme app features a three-step onboarding flow that introduces users to its main functions. It begins with a welcome message, inviting plant lovers to gain knowledge about plant care. The second screen highlights the app’s core feature—automatic plant identification through a photo, powered by advanced image recognition. The final screen emphasizes personalized care tips, helping users learn how to properly care for their ornamental plants. With a clean layout, progress indicators, and clear navigation buttons, the onboarding ensures a smooth start for new users." },
      { src: "/images/plantme2.png", caption: "The Admin Home Page of the Plantme app is designed to help administrators manage and organize the plant database efficiently. It displays a list of ornamental plants, each with a photo, name, and action buttons to edit or delete entries. A search bar at the top allows quick filtering of plant names, while the bottom navigation menu provides access to essential features such as scanning and history. With its clean and user-friendly interface, this page enables admins to easily maintain accurate and up-to-date plant information." },
      { src: "/images/plantme3.png", caption: "The User Home Page in the Plantme app is similar in layout to the Admin version but with limited access tailored for regular users. While users can view the list of identified plants along with their names and images, they do not have access to edit or delete buttons. This ensures that users can explore and learn about their plants without altering the core database. The interface remains clean and easy to navigate, with features like the search bar and bottom navigation still available for a smooth user experience." },
      { src: "/images/plantme4.png", caption: "The Scan Page of the Plantme app allows users to identify plants quickly and easily using images. Users can upload a plant photo either by taking a new picture or selecting one from their gallery. Once the image is uploaded, the app analyzes it and displays the identification result, such as the plant name “Keladi.” A button to view detailed care tips is also provided after identification. The step-by-step flow at the top guides users through the process, making it simple and intuitive to recognize plants and learn how to care for them." },
      { src: "/images/plantme5.png", caption: "The Plant Detail Page in the Plantme app provides users with comprehensive information about a specific plant, such as Keladi. It includes a clear plant image, a short description, and a section called Tips Perawatan (Care Tips) that covers key care aspects like sunlight needs, watering frequency, and recommended fertilizers. Each tip is presented with intuitive icons for better readability. At the bottom, users are also shown suggestions for other plants they might be interested in, encouraging further exploration. The layout is clean and informative, helping users care for their plants more effectively." },
    ],
    github: "https://github.com/afiffakhriii/Plantme-Aplikasi-Mobile-Identifikasi-Tanaman-Hias-Menggunakan-Algoritma-Convolutional-Neural-Network",
  },
  {
    slug: "kanami",
    title: "KANAMI",
    description:
      "Kanami is an application designed for learning Japanese characters, developed in Unity 2D. It features a writing tutorial for Japanese characters, introduces common vocabulary, and offers practice exercises. This app aims to help users effectively learn and practice the Japanese language.",
    tech: ["Unity", "C#", "2D Animation"],
    images: [
      { src: "/images/landing.png", caption: "The Landing Page of the Kanami app presents a visually appealing introduction with traditional Japanese elements, including a multi-tiered pagoda set against the backdrop of Mount Fuji. The app title, *Kanami*, is prominently displayed in stylized text, capturing the cultural theme of the app. A rounded information icon and a blue button labeled '始めましょう' (which means “Let’s get started”) invite users to begin their learning journey, setting the tone for an immersive experience in studying Japanese characters." },
      { src: "/images/home.png", caption: "The Home Page of the Kanami app greets the user with a warm welcome message and a beautifully illustrated background featuring cherry blossoms and traditional Japanese scenery. It presents a clear and organized menu with buttons leading to different learning sections: Hiragana, Katakana, Vocabulary (Kosakata), Practice (Latihan), and Edit Profile (Ubah Profile). Each button is styled with vibrant colors and playful typography, creating an inviting and engaging interface for users to explore Japanese characters and vocabulary at their own pace." },
      { src: "/images/hiragana.png", caption: "The Hiragana page of the Kanami app displays a complete chart of basic Japanese syllables in a clean and structured layout. Each character is paired with its Romanized pronunciation, making it easier for learners to associate sounds with symbols. The background features soft cherry blossom illustrations that add a calming and thematic aesthetic, while navigation buttons at the bottom allow users to return, go home, or proceed smoothly through the app. This page serves as a foundational reference for users beginning their journey in learning Japanese writing." },
      { src: "/images/katakana.png", caption: "The Katakana page of the Kanami app presents a full chart of Japanese katakana characters, each accompanied by its Romanized reading to support beginner-friendly learning. The layout mirrors the Hiragana page for consistency, offering a clear and organized interface that helps users recognize and memorize katakana symbols with ease. The cherry blossom-themed background and navigation buttons at the bottom enhance both the visual appeal and usability of the page, making it an effective and aesthetically pleasing resource for learning Japanese script." },
       { src: "/images/kosakata.png", caption: "The Vocabulary page in the Kanami app showcases a collection of everyday objects, each represented by a clear image with the corresponding Japanese word written below it. This visual approach helps users connect vocabulary with real-life items, making learning more intuitive and memorable. The layout is simple and user-friendly, encouraging exploration and repetition. At the bottom of the screen, navigation buttons allow users to go back, return to the home page, or proceed to the next set of vocabulary, ensuring a smooth and guided learning experience." },
        { src: "/images/latihan.png", caption: "The Practice page in the Kanami app offers multiple-choice exercises where users are shown an image of an object and must select the correct Japanese word from several options. This interactive format reinforces vocabulary retention and tests the user's understanding in a fun and engaging way. The clean layout and clear visuals help maintain focus, while the quiz-style approach adds a sense of challenge and progress." },
    ],
    github: "https://github.com/afiffakhriii/Kanami",
  },
  {
    slug: "optix",
    title: "OPTIX VIRTUAL TRY ON GLASSES APP",
    description:
      "Optix is an e-commerce application for purchasing eyeglasses, with its main feature being a virtual try-on powered by Augmented Reality (AR) technology. Developed using Android Studio and Unity, this app allows users to virtually try on various models of glasses directly through their device, making it easier to choose frames that suit their style and face shape. By combining shopping with AR interaction, Optix helps users make more informed purchasing decisions without needing to physically try the products.",
    tech: ["Kotlin", "Jetpack Compose", "Android"],
    images: [
      { src: "/images/login.png", caption: "The login page of the Optix app provides a simple and user-friendly interface where users can enter their username and password to access the platform. Below the main login button, there are additional options that allow users to log in using their Google account or create a new account if they are first-time users. This layout ensures both convenience and flexibility, making it easy for users to get started with the app whether they prefer traditional login credentials or third-party authentication." },
      { src: "/images/optix_home.png", caption: "The home page of the Optix app features a clean and modern layout designed to enhance the shopping experience. At the top, there is a search bar for quickly finding specific eyeglass models, along with a notification icon to keep users updated on offers or order status. Below, a scrollable list displays various eyeglasses with images and brief details, allowing users to browse easily. At the bottom of the screen, a navigation bar provides quick access to key sections of the app, including Home, Wishlist, History, and Profile, ensuring smooth and intuitive navigation throughout the platform." },
      { src: "/images/optix_try.png", caption: "The try-on page in the Optix app allows users to virtually try on eyeglasses using their phone's camera and Augmented Reality (AR) technology. When accessed, the camera activates and overlays selected glasses onto the user’s face in real time, giving a realistic preview of how each model would look when worn. This immersive feature helps users find the perfect fit and style without visiting a physical store, making the shopping experience both convenient and personalized." },
    ],
    github: "https://github.com/yodhanabiha/Optix_App",
  },
    {
    slug: "sakuraKaigoshisetsu",
    title: "SAKURA KAIGOSHISETSU JAPANESE LEARNING APP FOR NURSING",
    description:
      "Sakura Kaigoshisetsu is an educational mobile app developed with Unity, designed to help nursing professionals and caregivers learn essential Japanese language used in elderly care. The app introduces commonly used vocabulary such as the names of daily medications, everyday foods, and basic elderly care routines in Japanese. It also features interactive scenarios where users practice responding to the needs of elderly patients using appropriate Japanese phrases, such as offering assistance or providing medication. To reinforce learning, the app includes quizzes and exercises that test comprehension and practical usage, making it a comprehensive and immersive tool for language learning in a healthcare context.",
    tech: ["Unity", "C#", "2D Animation"],
    images: [
      { src: "/images/sakura_home.png", caption: "The home page of this application presents a friendly and approachable interface aimed at individuals learning Japanese for nursing or caregiving purposes. Dominated by a soft blue plaid background, the design features a cute anime-style nurse character at the center, which adds a welcoming and engaging visual element. The Japanese title at the top reads '日本で働く：介護士用日本語', which translates to 'Working in Japan: Japanese for Caregivers'. Below it, there's a clear English subtitle, 'Learn Japanese for Nursing', along with a prominent 'Get Started' button to guide users into the learning journey. Additionally, two labeled buttons—“Kotoba” (Vocabulary) and “Renshuu” (Practice)—indicate that users can directly access language learning content. Overall, the home page effectively sets a friendly tone while clearly communicating the app’s educational purpose." },
      { src: "/images/room.png", caption: "This screen appears to be a room selection interface, where users can choose different areas of a house to learn relevant Japanese vocabulary. Each room is illustrated with a clear and colorful image, accompanied by its Japanese name written in hiragana or katakana, such as dining room (ダイニングルーム), bathroom (よくしつ), and bedroom (へや). Navigation buttons are also available, allowing users to move through the app smoothly. This layout provides an intuitive and engaging way to explore vocabulary contextually based on different living spaces." },
      { src: "/images/obat.png", caption: "The 'Obat-obatan' page introduces users to various types of medicine commonly encountered in caregiving settings, with each item labeled in Japanese, Indonesian, and illustrated with a simple image. Medicines such as 'obat masuk angin' (cold medicine), 'obat mata' (eye drops), and 'obat batuk' (cough syrup) are presented alongside their corresponding Japanese terms like かぜぐすり (kazegusuri) and めぐすり (megusuri). The visual layout is clean and easy to navigate, helping learners visually associate vocabulary with real-world items. Navigation buttons at the bottom allow users to move between sections, supporting smooth interaction throughout the app." },
      { src: "/images/kuis.png", caption: "This practice page, labeled 'れんしゅう' (renshū) which means 'exercise' or 'practice' in Japanese, is designed to test the user's understanding of vocabulary related to different rooms. At the center of the screen is an image of a bedroom, and beneath it are four colorful answer choices written in hiragana and katakana: しんさつしつ (examination room), へや (room/bedroom), いま (living room), and よくしつ (bathroom). Users are expected to select the correct Japanese term that matches the image shown. The interface is visually simple and intuitive, helping learners reinforce their vocabulary through visual association and active recall." },
    ],
    github: "https://github.com/afiffakhriii/SakuraKaigoshisetsu",
  },
  
];

export async function generateStaticParams() {
  return projects.map((project:any) => ({
    slug: project.slug,
  }));
}


export default function ProjectDetail({
  params,
}:any) {
  const project = projects.find((p:any) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <ProjectHero
        title={project.title}
        description={project.description}
        tech={project.tech}
        image={project.images[0].src}
        github={project.github}
      />
      <section
        id="screenshots"
        className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20"
      >
        <ProjectGallery images={project.images} alt={project.title} />
      </section>
    </div>
  );
}


