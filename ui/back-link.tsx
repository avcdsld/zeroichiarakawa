'use client';

import { useLanguage } from '#/lib/language-context';
import { FadeLink } from '#/ui/fade-link';

// Fixed top-left "back" affordance shared by every page that stands on its own
// (work detail, diary, CV).
export function BackLink({ href = '/' }: { href?: string }) {
  const { t } = useLanguage();

  return (
    <FadeLink
      href={href}
      back
      className="fixed left-6 top-6 text-xs text-gray-400 transition-opacity hover:opacity-50 md:left-12 md:top-12"
    >
      {t('← back', '← 戻る')}
    </FadeLink>
  );
}
