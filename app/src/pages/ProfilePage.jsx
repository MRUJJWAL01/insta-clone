import React, { useState } from 'react';
import { Settings, Grid, Bookmark, User, PlusCircle } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts');
  
  const profile = {
    username: 'ujjwalxchouhan',
    fullName: 'Ujjwal Rajput',
    posts: 4,
    followers: 510,
    following: 330,
    profileImage: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ',
  };

  const stories = [
    { id: 1, title: 'old memories', image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 2, title: 'enjoyment', image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 3, title: 'Highlights', image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 4, title: 'Highlights', image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 5, title: 'brother', image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 6, title: 'New', image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ', isNew: true },
  ];

  const posts = [
    { id: 1, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 2, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 3, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 4, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 5, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 6, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 7, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 8, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 8, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 8, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 8, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 8, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 8, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 8, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
    { id: 8, image: 'https://imgs.search.brave.com/iOopMhMWZg1Lr6sbt3leTiKZJA68n-jbooMyCnc3qDA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MjQyNDM5NC9waG90/by9haG1lZGFiYWQt/aW5kaWEtcm9oaXQt/c2hhcm1hLW9mLWlu/ZGlhLWN1dHMtYS1k/ZWplY3RlZC1maWd1/cmUtZm9sbG93aW5n/LXRoZS1pY2MtbWVu/cy1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/VWVObFFUaDlpWU9i/b1JNY29PVTJZRFRa/Z0lESmFodkF6SU5Q/alVrRTdvPQ' },
  
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Profile Header */}
      <div className="border-b lg:ml-40 lg:mt-10 mg:mr-20 border-gray-800">
        {/* Top Bar - Mobile */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <Settings className="w-6 h-6" />
          <div className="flex items-center gap-2">
            <span className="font-semibold">{profile.username}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">9+</span>
          </div>
        </div>

        {/* Profile Info Container - Centered */}
        <div className="w-full md:max-w-4xl md:mx-auto px-4 py-6">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between mb-8 lg:mr-40 lg:ml-50">
            <h1 className="text-xl font-normal">{profile.username}</h1>
            <div className="flex items-center gap-4">
              <button className="px-6 py-1.5 bg-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-700">
                Edit profile
              </button>
              <button className="px-6 py-1.5 bg-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-700">
                View archive
              </button>
              <Settings className="w-6 h-6 cursor-pointer" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex items-start gap-6 md:gap-12 mb-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-20 h-20 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-black p-1">
                    <img 
                      src={profile.profileImage} 
                      alt={profile.fullName}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and Info */}
            <div className="flex-1 min-w-0">
              {/* Mobile username */}
              <div className="md:hidden mb-4">
                <h2 className="font-semibold text-sm">{profile.fullName}</h2>
              </div>

              {/* Stats - Desktop */}
              <div className="hidden md:flex items-center gap-10 mb-5">
                <div className="text-center">
                  <span className="font-semibold">{profile.posts}</span>
                  <span className="text-gray-400 ml-1">posts</span>
                </div>
                <button className="text-center hover:text-gray-300">
                  <span className="font-semibold">{profile.followers}</span>
                  <span className="text-gray-400 ml-1">followers</span>
                </button>
                <button className="text-center hover:text-gray-300">
                  <span className="font-semibold">{profile.following}</span>
                  <span className="text-gray-400 ml-1">following</span>
                </button>
              </div>

              {/* Full name - Desktop */}
              <div className="hidden md:block">
                <h2 className="font-semibold">{profile.fullName}</h2>
              </div>

              {/* Mobile Buttons */}
              <div className="md:hidden  flex gap-2">
                <button className="flex-1 px-4 py-1.5 bg-gray-800 rounded-lg text-sm font-semibold">
                  Edit profile
                </button>
                <button className="flex-1 px-4 py-1.5 bg-gray-800 rounded-lg text-sm font-semibold">
                  View archive
                </button>
              </div>
            </div>
          </div>

          {/* Stats - Mobile */}
          <div className="md:hidden flex justify-around py-3 border-t border-b border-gray-800">
            <div className="text-center">
              <div className="font-semibold">{profile.posts}</div>
              <div className="text-gray-400 text-xs">posts</div>
            </div>
            <button className="text-center">
              <div className="font-semibold">{profile.followers}</div>
              <div className="text-gray-400 text-xs">followers</div>
            </button>
            <button className="text-center">
              <div className="font-semibold">{profile.following}</div>
              <div className="text-gray-400 text-xs">following</div>
            </button>
          </div>
        </div>
      </div>

      {/* Stories/Highlights - Centered */}
      <div className="border-b lg:ml-40 border-gray-800 py-4">
        <div className="w-full md:max-w-4xl md:mx-auto px-4 overflow-x-auto">
          <div className="flex gap-4 md:gap-8">
            {stories.map((story) => (
              <div key={story.id} className="flex-shrink-0 text-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${story.isNew ? 'bg-gray-800 border-2 border-gray-700' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600'} p-0.5 mb-1 cursor-pointer`}>
                  <div className="w-full h-full rounded-full bg-black p-1 flex items-center justify-center">
                    {story.isNew ? (
                      <PlusCircle className="w-8 h-8 text-gray-400" />
                    ) : (
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full rounded-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-300 max-w-[64px] md:max-w-[80px] truncate">{story.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs - Centered */}
      <div className="border-b border-gray-800">
        <div className="w-full md:max-w-4xl md:mx-auto flex justify-center">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center gap-2 px-8 py-3 border-t-2 transition-colors ${
              activeTab === 'posts' ? 'border-white' : 'border-transparent text-gray-400'
            }`}
          >
            <Grid className="w-5 h-5" />
            <span className="hidden md:inline text-xs font-semibold uppercase tracking-wider">Posts</span>
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-8 py-3 border-t-2 transition-colors ${
              activeTab === 'saved' ? 'border-white' : 'border-transparent text-gray-400'
            }`}
          >
            <Bookmark className="w-5 h-5" />
            <span className="hidden md:inline text-xs font-semibold uppercase tracking-wider">Saved</span>
          </button>
          <button
            onClick={() => setActiveTab('tagged')}
            className={`flex items-center gap-2 px-8 py-3 border-t-2 transition-colors ${
              activeTab === 'tagged' ? 'border-white' : 'border-transparent text-gray-400'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="hidden md:inline text-xs font-semibold uppercase tracking-wider">Tagged</span>
          </button>
        </div>
      </div>

      {/* Posts Grid - Centered */}
      <div className="w-ful lg:pl-10 md:max-w-4xl md:mx-auto px-0 md:px-4 py-0 md:py-4">
        <div className="grid grid-cols-3 gap-0.5">
          {posts.map((post) => (
            <div key={post.id} className="aspect-square cursor-pointer group relative overflow-hidden">
              <img 
                src={post.image} 
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}