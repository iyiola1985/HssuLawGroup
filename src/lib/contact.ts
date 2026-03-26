/** Public firm contact email (enquiries). */
export const FIRM_CONTACT_EMAIL = "contact@angelahssulawfirm.pro" as const;

export const mailtoContactHref = `mailto:${FIRM_CONTACT_EMAIL}?subject=${encodeURIComponent("Immigration law enquiry")}`;
