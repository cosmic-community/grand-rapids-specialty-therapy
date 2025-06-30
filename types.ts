// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Site Settings interface
interface SiteSettings extends CosmicObject {
  type_slug: 'site-settings';
  metadata: {
    site_title?: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
    safe_space_logo?: {
      url: string;
      imgix_url: string;
    };
    contact_phone?: string;
    contact_email?: string;
    address?: string;
    footer_content?: string;
    social_media_links?: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
    };
    business_hours?: string;
  };
}

// Team Member interface
interface TeamMember extends CosmicObject {
  type_slug: 'team-members';
  metadata: {
    full_name?: string;
    pronouns?: string;
    title_role?: string;
    profile_image?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    specialties?: SpecialtyArea[];
    credentials?: string;
    education?: string;
    years_experience?: number;
    contact_email?: string;
    phone_number?: string;
    fax_number?: string;
    availability_status?: {
      key: AvailabilityStatus;
      value: string;
    };
    accepted_insurance?: string;
    rates?: string;
    supervision_services?: boolean;
    display_order?: number;
  };
}

// Specialty Area interface
interface SpecialtyArea extends CosmicObject {
  type_slug: 'specialty-areas';
  metadata: {
    name?: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    icon?: {
      url: string;
      imgix_url: string;
    };
    related_therapists?: TeamMember[];
    display_order?: number;
  };
}

// FAQ interface
interface FAQ extends CosmicObject {
  type_slug: 'faqs';
  metadata: {
    question?: string;
    answer?: string;
    category?: {
      key: FAQCategory;
      value: string;
    };
    display_order?: number;
  };
}

// Page interface
interface Page extends CosmicObject {
  type_slug: 'pages';
  metadata: {
    page_title?: string;
    meta_description?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    hero_title?: string;
    hero_subtitle?: string;
    page_content?: string;
    additional_sections?: Record<string, any>;
    show_in_navigation?: boolean;
    navigation_order?: number;
  };
}

// Type literals for select-dropdown values
type AvailabilityStatus = 'available' | 'waitlist' | 'unavailable';
type FAQCategory = 'general' | 'insurance' | 'appointments' | 'services';

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards for runtime validation
function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type_slug === 'team-members';
}

function isSpecialtyArea(obj: CosmicObject): obj is SpecialtyArea {
  return obj.type_slug === 'specialty-areas';
}

function isFAQ(obj: CosmicObject): obj is FAQ {
  return obj.type_slug === 'faqs';
}

function isPage(obj: CosmicObject): obj is Page {
  return obj.type_slug === 'pages';
}

function isSiteSettings(obj: CosmicObject): obj is SiteSettings {
  return obj.type_slug === 'site-settings';
}

// Utility types
type OptionalMetadata<T> = Partial<T['metadata']>;

// Export all types
export type {
  CosmicObject,
  SiteSettings,
  TeamMember,
  SpecialtyArea,
  FAQ,
  Page,
  AvailabilityStatus,
  FAQCategory,
  CosmicResponse,
  OptionalMetadata
};

export {
  isTeamMember,
  isSpecialtyArea,
  isFAQ,
  isPage,
  isSiteSettings
};