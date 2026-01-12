import { ref, computed } from 'vue'

const projects = ref([
  // ===== BRANDING PROJECTS (use BC images) =====
  {
    id: 'qoi-tec-brand',
    title: 'Qoi_tec Brand Identity',
    category: 'branding',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    description: 'Complete brand identity system including logo, color palette, typography, and comprehensive brand guidelines.',
    challenge: 'Create a distinctive brand identity that communicates professionalism while maintaining a creative, approachable feel for a multi-service creative agency.',
    solution: 'Developed a modern wordmark with a distinctive underscore element, paired with a bold navy and sky blue color palette that conveys trust and creativity.',
    results: [
      'Brand recognition increased by 45%',
      'Consistent visual identity across all platforms',
      'Positive client feedback on professionalism'
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    year: '2024',
    featured: true,
    images: {
      thumbnail: '/images/portfolio/bc-1.jpg',
      hero: '/images/portfolio/bc-1.jpg',
      gallery: [
        '/images/portfolio/bc-1.jpg',
        '/images/portfolio/bc-2.jpg',
        '/images/portfolio/bc-3.jpg'
      ]
    }
  },
  {
    id: 'wellness-spa-brand',
    title: 'Serenity Wellness Spa',
    category: 'branding',
    tags: ['Logo Design', 'Brand Identity', 'Print Design'],
    description: 'Elegant brand identity for a luxury wellness spa, including logo, stationery, and marketing materials.',
    challenge: 'Create a calming, luxurious brand identity that appeals to high-end clientele seeking relaxation and rejuvenation.',
    solution: 'Designed a minimalist logo with organic flowing elements, soft earth tones, and elegant typography that evokes tranquility and sophistication.',
    results: [
      'Successfully launched new spa location',
      'Premium positioning achieved in market',
      'Increased booking inquiries by 60%'
    ],
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop'],
    year: '2023',
    featured: false,
    images: {
      thumbnail: '/images/portfolio/bc-4.jpg',
      hero: '/images/portfolio/bc-4.jpg',
      gallery: [
        '/images/portfolio/bc-4.jpg',
        '/images/portfolio/bc-5.jpg',
        '/images/portfolio/bc-6.jpg'
      ]
    }
  },
  {
    id: 'coffee-house-rebrand',
    title: 'Aroma Coffee House Rebrand',
    category: 'branding',
    tags: ['Rebrand', 'Packaging', 'Menu Design'],
    description: 'Complete rebrand for a local coffee house, including new logo, packaging, and menu design.',
    challenge: 'Modernize a beloved local coffee shop brand while preserving its community-focused heritage.',
    solution: 'Created a warm, inviting brand refresh that honors the shop\'s history while appealing to younger demographics with contemporary design elements.',
    results: [
      'Foot traffic increased by 25%',
      'Social media following doubled',
      'Merchandise sales launched successfully'
    ],
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop'],
    year: '2023',
    featured: false,
    images: {
      thumbnail: '/images/portfolio/bc-7.jpg',
      hero: '/images/portfolio/bc-7.jpg',
      gallery: [
        '/images/portfolio/bc-7.jpg',
        '/images/portfolio/bc-2.jpg',
        '/images/portfolio/bc-3.jpg'
      ]
    }
  },

  // ===== MARKETING PROJECTS (use CE images) =====
  {
    id: 'gocare-campaign',
    title: 'GoCare Marketing Campaign',
    category: 'marketing',
    tags: ['Digital Marketing', 'Social Media', 'Campaign Strategy'],
    description: 'Integrated marketing campaign that achieved 280% ROI and 35% increase in student enrollment for an educational institution.',
    challenge: 'Increase student enrollment for a healthcare training institution in a competitive market with limited brand awareness.',
    solution: 'Created a multi-channel digital campaign combining targeted social media ads, email marketing, and compelling visual content highlighting student success stories.',
    results: [
      '280% return on marketing investment',
      '35% increase in student enrollment',
      '150% growth in social media engagement'
    ],
    tools: ['Meta Ads Manager', 'Google Analytics', 'Mailchimp', 'Canva'],
    year: '2024',
    featured: true,
    images: {
      thumbnail: '/images/portfolio/ce-1.jpg',
      hero: '/images/portfolio/ce-1.jpg',
      gallery: [
        '/images/portfolio/ce-1.jpg',
        '/images/portfolio/ce-2.jpg',
        '/images/portfolio/ce-3.jpg'
      ]
    }
  },
  {
    id: 'techstart-launch',
    title: 'TechStart Product Launch',
    category: 'marketing',
    tags: ['Product Launch', 'Digital Ads', 'Landing Page'],
    description: 'Complete product launch campaign for a tech startup, including landing page design and digital advertising.',
    challenge: 'Launch a new SaaS product in a crowded market with a limited budget and tight timeline.',
    solution: 'Created a compelling landing page with clear value proposition, supported by targeted LinkedIn and Google ad campaigns.',
    results: [
      '500+ sign-ups in first month',
      '12% conversion rate on landing page',
      'Cost per acquisition 40% below target'
    ],
    tools: ['Figma', 'Google Ads', 'LinkedIn Ads', 'Unbounce'],
    year: '2024',
    featured: false,
    images: {
      thumbnail: '/images/portfolio/ce-4.jpg',
      hero: '/images/portfolio/ce-4.jpg',
      gallery: [
        '/images/portfolio/ce-4.jpg',
        '/images/portfolio/ce-5.jpg',
        '/images/portfolio/ce-6.jpg'
      ]
    }
  },
  {
    id: 'ngo-awareness',
    title: 'GreenFuture NGO Campaign',
    category: 'marketing',
    tags: ['Non-Profit', 'Awareness Campaign', 'Print & Digital'],
    description: 'Environmental awareness campaign combining print and digital materials for maximum community reach.',
    challenge: 'Create an impactful awareness campaign with limited resources that would resonate with diverse community demographics.',
    solution: 'Designed a visually striking campaign using bold imagery and clear messaging, distributed through both traditional and digital channels.',
    results: [
      'Reached 50,000+ community members',
      'Volunteer sign-ups increased 80%',
      'Campaign featured in local media'
    ],
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Meta Ads'],
    year: '2023',
    featured: false,
    images: {
      thumbnail: '/images/portfolio/ce-7.jpg',
      hero: '/images/portfolio/ce-7.jpg',
      gallery: [
        '/images/portfolio/ce-7.jpg',
        '/images/portfolio/ce-8.jpg',
        '/images/portfolio/ce-9.jpg',
        '/images/portfolio/ce-10.jpg'
      ]
    }
  },

  // ===== SOCIAL MEDIA PROJECTS (use SM images) =====
  {
    id: 'social-media-collection',
    title: 'Social Media Design Collection',
    category: 'social-media',
    tags: ['Social Media', 'Content Design', 'Instagram'],
    description: 'Engaging social media graphics and content strategy that drove 325% Instagram growth for multiple clients.',
    challenge: 'Create scroll-stopping social media content that stands out in crowded feeds while maintaining brand consistency.',
    solution: 'Developed a cohesive visual system with eye-catching templates, strategic color usage, and engaging carousel formats optimized for each platform.',
    results: [
      '325% Instagram follower growth',
      '4x increase in engagement rate',
      'Consistent posting schedule maintained'
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Later'],
    year: '2023-2024',
    featured: true,
    images: {
      thumbnail: '/images/portfolio/sm-1.jpg',
      hero: '/images/portfolio/sm-1.jpg',
      gallery: [
        '/images/portfolio/sm-1.jpg',
        '/images/portfolio/sm-2.jpg',
        '/images/portfolio/sm-3.jpg',
        '/images/portfolio/sm-4.jpg'
      ]
    }
  },
  {
    id: 'fitness-social',
    title: 'FitLife Social Campaign',
    category: 'social-media',
    tags: ['Social Media', 'Content Strategy', 'Fitness'],
    description: 'Comprehensive social media management and content creation for a fitness brand.',
    challenge: 'Build an engaged community and increase brand awareness for a new fitness app in a saturated market.',
    solution: 'Developed a content strategy featuring workout tips, motivational content, and user-generated content campaigns that fostered community engagement.',
    results: [
      '10K followers in 3 months',
      'User-generated content increased 200%',
      'App downloads up 45%'
    ],
    tools: ['Adobe Photoshop', 'Canva', 'Hootsuite', 'TikTok'],
    year: '2024',
    featured: false,
    images: {
      thumbnail: '/images/portfolio/sm-5.jpg',
      hero: '/images/portfolio/sm-5.jpg',
      gallery: [
        '/images/portfolio/sm-5.jpg',
        '/images/portfolio/sm-6.jpg',
        '/images/portfolio/sm-7.jpg'
      ]
    }
  }
])

const categories = ref([
  { id: 'all', label: 'All Work', count: 0 },
  { id: 'branding', label: 'Branding', count: 0 },
  { id: 'marketing', label: 'Marketing', count: 0 },
  { id: 'social-media', label: 'Social Media', count: 0 }
])

export function useProjects() {
  const activeCategory = ref('all')
  const selectedProject = ref(null)

  // Calculate category counts
  const categoriesWithCounts = computed(() => {
    return categories.value.map(cat => ({
      ...cat,
      count: cat.id === 'all'
        ? projects.value.length
        : projects.value.filter(p => p.category === cat.id).length
    }))
  })

  // Filter projects by category
  const filteredProjects = computed(() => {
    if (activeCategory.value === 'all') {
      return projects.value
    }
    return projects.value.filter(p => p.category === activeCategory.value)
  })

  // Get featured projects
  const featuredProjects = computed(() => {
    return projects.value.filter(p => p.featured)
  })

  // Get project by ID
  const getProjectById = (id) => {
    return projects.value.find(p => p.id === id)
  }

  // Set active category
  const setCategory = (categoryId) => {
    activeCategory.value = categoryId
  }

  // Select project for modal
  const selectProject = (project) => {
    selectedProject.value = project
  }

  // Close modal
  const closeProject = () => {
    selectedProject.value = null
  }

  return {
    projects,
    categories: categoriesWithCounts,
    activeCategory,
    filteredProjects,
    featuredProjects,
    selectedProject,
    getProjectById,
    setCategory,
    selectProject,
    closeProject
  }
}
