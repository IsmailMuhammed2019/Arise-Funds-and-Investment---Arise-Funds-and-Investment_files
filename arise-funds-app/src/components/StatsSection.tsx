import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    id: 1,
    number: "2,500+",
    label: "Students Funded",
    description: "Across 15+ African countries",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    )
  },
  {
    id: 2,
    number: "95%",
    label: "Job Placement Rate",
    description: "Within 6 months of graduation",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
      </svg>
    )
  },
  {
    id: 3,
    number: "$2,500",
    label: "Average Salary Increase",
    description: "After program completion",
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  },
  {
    id: 4,
    number: "30+",
    label: "Partner Institutions",
    description: "Global training providers",
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 5,
    number: "15+",
    label: "Countries Served",
    description: "Across Africa",
    icon: (
      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 6,
    number: "3 Months",
    label: "Average Time to Employment",
    description: "From program completion",
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const impactMetrics = [
  {
    category: "Economic Impact",
    metrics: [
      { label: "Total Funding Disbursed", value: "$15M+" },
      { label: "Average ROI for Students", value: "300%" },
      { label: "Economic Value Generated", value: "$45M+" }
    ]
  },
  {
    category: "Social Impact",
    metrics: [
      { label: "Families Supported", value: "10,000+" },
      { label: "Communities Impacted", value: "50+" },
      { label: "Youth Employment Rate", value: "85%" }
    ]
  },
  {
    category: "Program Success",
    metrics: [
      { label: "Program Completion Rate", value: "92%" },
      { label: "Student Satisfaction", value: "4.8/5" },
      { label: "Employer Satisfaction", value: "4.9/5" }
    ]
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the real impact AriseFunds is making across Africa through our comprehensive student financing and career development programs.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat) => (
            <Card key={stat.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Impact Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {impactMetrics.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <span className="font-bold text-blue-600">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Success Stories
            </h3>
            <p className="text-gray-600">
              Real stories from our graduates who have transformed their lives through AriseFunds
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sarah Mwangi</h4>
              <p className="text-sm text-gray-600 mb-2">BPO Specialist</p>
                             <p className="text-xs text-gray-500">&quot;Went from $200 to $2,500 monthly salary&quot;</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">David Okechukwu</h4>
              <p className="text-sm text-gray-600 mb-2">Customer Service Manager</p>
                             <p className="text-xs text-gray-500">&quot;Now manages a team of 15 people&quot;</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Amina Hassan</h4>
              <p className="text-sm text-gray-600 mb-2">Data Entry Specialist</p>
                             <p className="text-xs text-gray-500">&quot;Secured job within 3 months&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 