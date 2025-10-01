import { notFound } from 'next/navigation';
import { policies } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl } from '@/lib/imagePresets';
import { ArrowLeft, FileText, Calendar, User, Star, ArrowRight } from 'lucide-react';

interface PolicyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return policies.map((policy) => ({
    slug: policy.slug,
  }));
}

export async function generateMetadata({ params }: PolicyPageProps) {
  const resolvedParams = await params;
  const policy = policies.find((p) => p.slug === resolvedParams.slug);
  
  if (!policy) {
    return {
      title: 'Policy Not Found',
    };
  }

  return {
    title: `${policy.title} - PGS FM Ltd Professional Security & Facilities Management`,
    description: policy.description,
  };
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const resolvedParams = await params;
  const policy = policies.find((p) => p.slug === resolvedParams.slug);

  if (!policy) {
    notFound();
  }

  const policyContent = {
    'privacy-policy': {
      lastUpdated: '15/12/2024',
      effectiveDate: '15/12/2024',
      content: [
        {
          title: 'Information We Collect',
          text: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, and other contact information.'
        },
        {
          title: 'How We Use Your Information',
          text: 'We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure the security of our operations. We do not sell or share your personal information with third parties without your consent.'
        },
        {
          title: 'Data Security',
          text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures are regularly reviewed and updated.'
        },
        {
          title: 'Your Rights',
          text: 'You have the right to access, update, or delete your personal information. You may also object to the processing of your data or request data portability. To exercise these rights, please contact us using the information provided below.'
        }
      ]
    },
    'data-protection-policy': {
      lastUpdated: '15/12/2024',
      effectiveDate: '15/12/2024',
      content: [
        {
          title: 'GDPR Compliance',
          text: 'We are committed to full compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. This policy outlines our approach to data protection and privacy.'
        },
        {
          title: 'Lawful Basis for Processing',
          text: 'We process personal data only when we have a lawful basis to do so, including consent, contract performance, legal obligation, legitimate interests, or vital interests.'
        },
        {
          title: 'Data Minimization',
          text: 'We collect and process only the personal data that is necessary for the purposes for which it is processed. We regularly review our data collection practices to ensure we are not collecting excessive information.'
        },
        {
          title: 'Data Retention',
          text: 'We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.'
        }
      ]
    },
    'health-safety-policy': {
      lastUpdated: '15/12/2024',
      effectiveDate: '15/12/2024',
      content: [
        {
          title: 'Health and Safety Commitment',
          text: 'We are committed to providing a safe and healthy working environment for all employees, contractors, and visitors. This policy outlines our approach to health and safety management.'
        },
        {
          title: 'Risk Assessment',
          text: 'We conduct regular risk assessments to identify potential hazards and implement appropriate control measures. All identified risks are documented and regularly reviewed.'
        },
        {
          title: 'Training and Awareness',
          text: 'All employees receive comprehensive health and safety training appropriate to their role and responsibilities. Training is regularly updated and refreshed to ensure continued awareness.'
        },
        {
          title: 'Incident Reporting',
          text: 'We maintain a robust incident reporting system to ensure all accidents, near misses, and safety concerns are properly documented, investigated, and addressed.'
        }
      ]
    },
    'business-ethics-policy': {
      lastUpdated: '15/12/2024',
      effectiveDate: '15/12/2024',
      content: [
        {
          title: 'Ethical Standards',
          text: 'We are committed to conducting business with the highest ethical standards and integrity. This policy outlines our expectations for ethical behavior in all business activities.'
        },
        {
          title: 'Anti-Corruption',
          text: 'We have zero tolerance for corruption, bribery, or any form of unethical business practice. All employees are required to comply with anti-corruption laws and regulations.'
        },
        {
          title: 'Conflicts of Interest',
          text: 'Employees must avoid situations where their personal interests conflict with the interests of the company. All potential conflicts of interest must be disclosed and managed appropriately.'
        },
        {
          title: 'Whistleblowing',
          text: 'We encourage employees to report any suspected unethical behavior through our confidential whistleblowing procedures. All reports are taken seriously and investigated thoroughly.'
        }
      ]
    },
    'environmental-policy': {
      lastUpdated: '15/12/2024',
      effectiveDate: '15/12/2024',
      content: [
        {
          title: 'Environmental Commitment',
          text: 'We are committed to minimizing our environmental impact and promoting sustainable business practices. This policy outlines our environmental objectives and commitments.'
        },
        {
          title: 'Waste Reduction',
          text: 'We strive to reduce waste generation through efficient resource use, recycling programs, and sustainable procurement practices. We aim to minimize our carbon footprint in all operations.'
        },
        {
          title: 'Energy Efficiency',
          text: 'We promote energy efficiency in all our operations and encourage the use of renewable energy sources where possible. We regularly monitor and improve our energy consumption patterns.'
        },
        {
          title: 'Environmental Compliance',
          text: 'We comply with all applicable environmental laws and regulations and strive to exceed minimum requirements where possible. We regularly review our environmental performance and set improvement targets.'
        }
      ]
    }
  };

  const content = policyContent[policy.slug as keyof typeof policyContent];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl('hero', policy.title)}
            alt={`${policy.title} policy`}
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-green-900/80 to-slate-800/80"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Company Policy
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {policy.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {policy.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/contact" className="flex items-center">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
                <Link href="/policies">All Policies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Policy Header */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center p-4 bg-green-50 rounded-xl">
                  <FileText className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <span className="text-sm font-semibold text-green-600">Policy Document</span>
                    <p className="text-sm text-gray-600">Official company policy</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <span className="text-sm font-semibold text-green-600">Last Updated</span>
                    <p className="text-sm text-gray-600">{content?.lastUpdated}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <User className="w-6 h-6 text-purple-600 mr-3" />
                  <div>
                    <span className="text-sm font-semibold text-purple-600">Effective Date</span>
                    <p className="text-sm text-gray-600">{content?.effectiveDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8 mb-12">
              {content?.content.map((section, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6 mt-1 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                        {section.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Questions About This Policy?
                </h2>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  If you have any questions about this policy or need clarification on any aspect, 
                  please contact our team using the information below.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gradient-to-r from-white to-slate-100 text-green-600 hover:from-slate-100 hover:to-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Link href="/contact" className="flex items-center">
                      Contact Us
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent">
                    <Link href="/policies" className="flex items-center">
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back to Policies
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
