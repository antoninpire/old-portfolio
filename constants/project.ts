export type PROJECT_NAMES = 'sinta' | 'natflix'

type TBullet = {
  label: string
  content: {
    type: 'text' | 'url'
    text: string
    target?: string
  }
}

type TImage = {
  path: string
  alt: string
}

type TImages = TImage[]

export type TProject = {
  [key in PROJECT_NAMES]: {
    name: string
    description: string
    images: TImages[]
    bullets: TBullet[]
    features: string[]
  }
}

export const PROJECT: TProject = {
  sinta: {
    name: 'Sinta',
    description:
      'A cross-platform mobile app designed for couples to build fun and lasting relationship habits.',
    images: [
      [
        {
          path: '/assets/sinta.png',
          alt: 'Sinta Website'
        }
      ],
      [
        {
          path: '/assets/1.png',
          alt: 'Sinta App 1'
        },
        {
          path: '/assets/2.png',
          alt: 'Sinta App 2'
        }
      ],
      [
        {
          path: '/assets/3.png',
          alt: 'Sinta App 3'
        },
        {
          path: '/assets/4.png',
          alt: 'Sinta App 4'
        }
      ]
    ],
    bullets: [
      {
        label: 'website',
        content: {
          type: 'url',
          text: 'https://sinta.app/',
          target: 'https://sinta.app/'
        }
      },
      {
        label: 'apps',
        content: {
          type: 'url',
          text: 'https://sinta.app/download',
          target: 'https://sinta.app/download'
        }
      },
      {
        label: 'platform',
        content: {
          type: 'text',
          text: 'Android / IOS'
        }
      },
      {
        label: 'stack',
        content: {
          type: 'text',
          text: 'React Native / NextJS / NodeJS / PostgresSQL'
        }
      },
      {
        label: 'other',
        content: {
          type: 'text',
          text: 'AWS / Prisma / Socket.IO / Jotai / React Query / Tailwind'
        }
      }
    ],
    features: [
      'Auth system w/ JWT tokens',
      'Interactive calendar w/ multiple type of activities & events',
      'Interactive map w/ multiple type of activities & events',
      'Media storage using AWS S3',
      'Date Idea & Movie Swipers using web sockets',
      'Date Ideas / Notes / Travels / Lockets creation',
      'Love Actions using expo push notifications',
      'Much more can be found on the app'
      // 'Calendar: keep an history of every important event of your relationship, every activity done together, the amount of time you had sex, and many more things...',
      // 'You can even plan things together with your Sinta !',
      // 'Map: a visual representations of all the meaningful locations of your relationship !',
      // 'Date Ideas: make your own bucket list of date ideas, decide which one you should do with the Quick Swipes feature, plan any date idea, get a random one, and many other things !',
      // 'Lockets: Have a locket that both of you will share on your homescreen, and can be changed anytime...',
      // 'Love Buttons: Send any kind of notification to your soulmate, attention needy, in the mood, emojis, hungry, kisses...',
      // 'Notes: Write some corny short jokes for your partner to read, or write them fully written love letters to tell them how awesome they are...',
      // 'Dump: Share all your files in one place, so that your partner and you can come back to those precious memories anytime...',
      // 'Travels: Keep an history of the travels you have had together, adding pictures or videos...',
      // "Movies Swiper: Don't know what to watch with them ? Just open the app and swipe through thousand of movies to match with your partner !"
    ]
  },
  natflix: {
    name: 'Natflix',
    description:
      'A Netflix inspired website implementing machine learning for content suggestions and recommandations. I used open source data to feed the database with views and ratings of thousand of users on various movies, which are used within one of the three implemented machine learning algorithms to fetch the movies liked by users with similar taste.',
    images: [
      [
        {
          path: '/assets/natflix.png',
          alt: 'Natflix Website'
        }
      ]
    ],
    bullets: [
      {
        label: 'browsers',
        content: {
          type: 'text',
          text: 'Chrome / Firefox / Safari'
        }
      },
      {
        label: 'back git',
        content: {
          type: 'url',
          text: 'github.com',
          target: 'https://github.com/antoninpire/Natflix-Back'
        }
      },
      {
        label: 'front git',
        content: {
          type: 'url',
          text: 'github.com',
          target: 'https://github.com/antoninpire/Natflix-Front'
        }
      },
      {
        label: 'stack',
        content: {
          type: 'text',
          text: 'React / NodeJS / MySQL / Python / Machine Learning'
        }
      }
    ],
    features: [
      'Auth system w/ JWT tokens',
      'Role system w/ Admin Panel',
      '3 Machine Learning implementations, changeable through preferences',
      'Rating system & view system'
    ]
  }
}
