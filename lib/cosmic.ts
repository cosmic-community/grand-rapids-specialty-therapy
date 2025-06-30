import { createBucketClient } from '@cosmicjs/sdk'
import { TeamMember, SpecialtyArea, FAQ, Page, SiteSettings, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('metadata.display_order');
    
    return response.objects as TeamMember[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching team members:', error);
    throw new Error('Failed to fetch team members');
  }
}

// Fetch single team member by slug
export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'team-members',
        slug
      })
      .depth(1);
    
    return response.object as TeamMember;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching team member:', error);
    throw new Error('Failed to fetch team member');
  }
}

// Fetch all specialty areas
export async function getSpecialtyAreas(): Promise<SpecialtyArea[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'specialty-areas' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('metadata.display_order');
    
    return response.objects as SpecialtyArea[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching specialty areas:', error);
    throw new Error('Failed to fetch specialty areas');
  }
}

// Fetch single specialty area by slug
export async function getSpecialtyArea(slug: string): Promise<SpecialtyArea | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'specialty-areas',
        slug
      })
      .depth(1);
    
    return response.object as SpecialtyArea;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching specialty area:', error);
    throw new Error('Failed to fetch specialty area');
  }
}

// Fetch all FAQs
export async function getFAQs(): Promise<FAQ[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'faqs' })
      .props(['id', 'title', 'slug', 'metadata'])
      .sort('metadata.display_order');
    
    return response.objects as FAQ[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching FAQs:', error);
    throw new Error('Failed to fetch FAQs');
  }
}

// Fetch FAQs by category
export async function getFAQsByCategory(category: string): Promise<FAQ[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'faqs',
        'metadata.category.key': category
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .sort('metadata.display_order');
    
    return response.objects as FAQ[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching FAQs by category:', error);
    throw new Error('Failed to fetch FAQs by category');
  }
}

// Fetch all pages
export async function getPages(): Promise<Page[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .sort('metadata.navigation_order');
    
    return response.objects as Page[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching pages:', error);
    throw new Error('Failed to fetch pages');
  }
}

// Fetch single page by slug
export async function getPage(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'pages',
        slug
      });
    
    return response.object as Page;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching page:', error);
    throw new Error('Failed to fetch page');
  }
}

// Fetch site settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await cosmic.objects
      .find({ type: 'site-settings' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    if (response.objects && response.objects.length > 0) {
      return response.objects[0] as SiteSettings;
    }
    return null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching site settings:', error);
    throw new Error('Failed to fetch site settings');
  }
}

// Fetch navigation pages
export async function getNavigationPages(): Promise<Page[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'pages',
        'metadata.show_in_navigation': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .sort('metadata.navigation_order');
    
    return response.objects as Page[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching navigation pages:', error);
    throw new Error('Failed to fetch navigation pages');
  }
}