type OgImageOptions = Partial<{
  theme: string;
  fontSize: string;
  images: string;
  images2: string;
}>;

export const ogImage = (text: string, options?: OgImageOptions) => {
  const defaultOptions: OgImageOptions = {
    theme: 'dark',
    fontSize: '100px',
    images: encodeURIComponent(
      'https://assets.vercel.com/image/upload/front/assets/design/nextjs-white-logo.svg'
    ),
    images2: encodeURIComponent('https://next-ts-tw-starter.vercel.app/ts.svg'),
  };

  const finalOptions: OgImageOptions = {
    ...defaultOptions,
    ...options,
  };

  if (finalOptions.images2) {
    return `https://og-image-ismlhbb.vercel.app/ismlhbb%2F**${text}**.png?theme=${finalOptions.theme}&md=1&fontSize=${finalOptions.fontSize}&images=${finalOptions.images}&images=${finalOptions.images2}`;
  }
  return `https://og-image-ismlhbb.vercel.app/ismlhbb%2F**${text}**.png?theme=${finalOptions.theme}&md=1&fontSize=${finalOptions.fontSize}&images=${finalOptions.images}`;
};
