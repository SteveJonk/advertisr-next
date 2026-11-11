import { Fragment } from 'react';
import { Compare } from '@/components/advertisr/Compare';
import { btn, pic, Rich } from '@/components/advertisr/cms';
import { FinalCta } from '@/components/advertisr/FinalCta';
import { Logos } from '@/components/advertisr/Logos';
import { Marquee } from '@/components/advertisr/Marquee';
import { Reviews } from '@/components/advertisr/Reviews';
import * as S from '@/components/advertisr/sections';
import { mainCta, type B } from '@/components/advertisr/sections';
import { CaseStudy, Crea, CtaBand, Deliverables, Faq, FloatStat, Funnel, Pain, ServiceHero } from '@/components/advertisr/service';
import { Sec, Wrap } from '@/components/advertisr/ui';
import { DashVisual, FlowVisual, JourneyVisual, PhoneVisual, SerpVisual, SiteVisual, SocialVisual } from '@/components/advertisr/visuals';
import type { Site } from '@/lib/site';

type Any = { _type: string; _key: string };

const VISUALS = {
  phone: PhoneVisual,
  serp: SerpVisual,
  site: SiteVisual,
  dash: DashVisual,
  journey: JourneyVisual,
  flow: FlowVisual,
  social: SocialVisual,
};

function ServiceHeroBlock({ b, site }: { b: B<'serviceHero'>; site: Site }) {
  const Visual = b.visual && b.visual !== 'portal' ? VISUALS[b.visual] : null;
  const shot = pic(b.image, 1280);
  const portal = b.visual === 'portal';
  return (
    <ServiceHero
      className={portal ? 'pt-[170px] max-sm:pt-[130px]' : undefined}
      home={site.ui.crumbHome}
      crumbs={[[site.ui.crumbServices ?? '', '/#diensten'], [b.crumb ?? '']]}
      eyebrow={b.eyebrow}
      title={<Rich value={b.title} />}
      sub={b.lead}
      primary={mainCta(b.primaryCta, site)}
      ghost={btn(b.secondaryCta)}
      ticks={b.ticks ?? []}
      visual={
        Visual ? (
          <Visual />
        ) : (
          shot && (
            <div className='rv relative'>
              <S.Shot src={shot.src} alt={shot.alt} url={b.browserUrl} priority />
              {(b.floatStats ?? []).map((f, i) => (
                <FloatStat
                  key={f._key}
                  value={f.value}
                  label={f.label ?? ''}
                  className={i ? '-top-[22px] -right-[18px] max-[1000px]:hidden' : 'bottom-14 -left-[34px] max-[1000px]:hidden'}
                />
              ))}
              <p className='mt-3 text-xs text-dim-2'>{b.caption}</p>
            </div>
          )
        )
      }
    />
  );
}

/**
 * Map one Sanity block onto its component. `prev` is the block before it:
 * a few sections tighten their top padding after a particular neighbour,
 * as the designs do, so that spacing never becomes an editor's setting.
 *
 * ADDING A BLOCK: `studio/schemaTypes/blocks.ts`, resolve references in
 * `src/sanity/queries.ts`, run `npm run typegen`, then add a case here.
 */
function render(block: Any, site: Site, prev?: Any) {
  const { ui } = site;
  switch (block._type) {
    case 'homeHero':
      return <S.HomeHero b={block as B<'homeHero'>} site={site} />;
    case 'serviceHero':
      return <ServiceHeroBlock b={block as B<'serviceHero'>} site={site} />;
    case 'pageHero':
      return <S.PageHero b={block as B<'pageHero'>} site={site} />;
    case 'contactHero':
      return <S.ContactHero b={block as B<'contactHero'>} site={site} />;
    case 'groeiplanHero':
      return <S.GroeiplanHero b={block as B<'groeiplanHero'>} site={site} />;
    case 'articleIndex':
      return <S.ArticleIndex b={block as B<'articleIndex'>} site={site} />;
    case 'marquee':
      return <Marquee items={(block as B<'marquee'>).items ?? []} />;
    case 'compare': {
      const b = block as B<'compare'>;
      return <Compare {...b} title={<Rich value={b.title} />} rows={b.rows ?? []} />;
    }
    case 'pain': {
      const b = block as B<'pain'>;
      const image = pic(b.quote?.image, 160);
      return (
        <Pain
          className={b.quote ? undefined : 'pb-[110px]'}
          eyebrow={b.eyebrow}
          title={<Rich value={b.title} />}
          lead={b.lead}
          items={(b.items ?? []).map((i) => ({ q: i.quote ?? '', text: i.text }))}
          bridge={b.quote ? { img: image?.src, alt: image?.alt, line: <Rich value={b.quote.line} />, sig: b.quote.signature } : undefined}
        />
      );
    }
    case 'funnel': {
      const b = block as B<'funnel'>;
      return (
        <Funnel
          // After the overlapping founder quote the design leaves extra room.
          className={prev?._type === 'pain' && (prev as B<'pain'>).quote ? undefined : 'pt-[110px]!'}
          id={b.anchor ?? undefined}
          eyebrow={b.eyebrow}
          title={<Rich value={b.title} />}
          body={b.body}
          ghost={b.ghostLabel}
          layers={(b.layers ?? []).map((l) => ({ tag: l.tag, title: l.title, text: l.text, kpi: l.kpi?.length ? <Rich value={l.kpi} /> : undefined }))}
        />
      );
    }
    case 'deliverables': {
      const b = block as B<'deliverables'>;
      const photo = pic(b.photo?.image, 900);
      return (
        <Deliverables
          eyebrow={b.eyebrow}
          title={<Rich value={b.title} />}
          lead={b.lead}
          photo={{ src: photo?.src, alt: photo?.alt, t: b.photo?.title, s: b.photo?.text }}
          rows={(b.rows ?? []).map((r) => ({ title: r.title ?? '', text: r.text }))}
          band={b.band ? { title: <Rich value={b.band.title} />, sub: b.band.text, cta: mainCta(b.band.cta, site) } : undefined}
        />
      );
    }
    case 'mediaChips': {
      const b = block as B<'mediaChips'>;
      const image = pic(b.image, 1200);
      return (
        <Crea
          img={image?.src}
          alt={image?.alt}
          badge={{ t: b.badge?.title, s: b.badge?.text }}
          eyebrow={b.eyebrow}
          title={<Rich value={b.title} />}
          paras={b.paragraphs ?? []}
          chips={b.chips ?? undefined}
          shot={!!b.screenshot}
        />
      );
    }
    case 'caseHighlight': {
      const b = block as B<'caseHighlight'>;
      const image = pic(b.image, 1240);
      return (
        <CaseStudy
          eyebrow={b.eyebrow}
          title={<Rich value={b.title} />}
          img={image?.src}
          alt={image?.alt}
          cat={b.category}
          name={b.name}
          text={b.text}
          stats={(b.stats ?? []).map((s) => [s.value ?? '', s.label ?? ''])}
        />
      );
    }
    case 'procSteps':
      return <S.ProcSteps b={block as B<'procSteps'>} site={site} />;
    case 'ctaBand': {
      const b = block as B<'ctaBand'>;
      return (
        <Sec className='pt-0!'>
          <Wrap>
            <CtaBand className='mt-0!' title={<Rich value={b.title} />} sub={b.text} cta={mainCta(b.cta, site)} />
          </Wrap>
        </Sec>
      );
    }
    case 'quoteBand':
      return <S.QuoteBand b={block as B<'quoteBand'>} site={site} />;
    case 'faqs': {
      const b = block as B<'faqs'>;
      return (
        <Faq
          // Right under a case the design drops the top padding; on the grey band it gets a border.
          className={b.soft ? 'border-t border-line bg-soft' : prev?._type === 'caseHighlight' ? 'pt-0!' : undefined}
          eyebrow={b.eyebrow}
          title={<Rich value={b.title} />}
          items={(b.faqs ?? []).map((f) => ({ q: f.question, a: f.answer }))}
        />
      );
    }
    case 'logos': {
      const b = block as B<'logos'>;
      const logos = (b.clients ?? []).flatMap((c) => {
        const logo = pic(c.logo, 300);
        return logo ? [{ src: logo.src, alt: c.name }] : [];
      });
      return <Logos eyebrow={b.eyebrow} title={<Rich value={b.title} />} note={b.note} logos={logos} />;
    }
    case 'reviews': {
      const b = block as B<'reviews'>;
      return (
        <Reviews
          // After a section with its own bottom padding the design tightens the gap.
          className={prev?._type === 'caseList' ? 'pt-5!' : undefined}
          eyebrow={b.eyebrow}
          title={<Rich value={b.title} />}
          items={(b.items ?? []).slice(0, b.count ?? 6)}
          rating={site.rating}
          ui={ui}
        />
      );
    }
    case 'finalCta': {
      const b = block as B<'finalCta'>;
      return (
        <FinalCta
          id={b.anchor ?? undefined}
          eyebrow={b.eyebrow}
          title={<Rich value={b.title} />}
          lead={b.lead}
          list={b.bullets}
          ui={ui}
          form={b.form}
          backdrop={b.dots ? <S.Dots /> : undefined}
        />
      );
    }
    case 'stages':
      return <S.Stages b={block as B<'stages'>} site={site} />;
    case 'caseCards':
      return <S.CaseCards b={block as B<'caseCards'>} site={site} />;
    case 'approach':
      return <S.Approach b={block as B<'approach'>} site={site} />;
    case 'statBand':
      return <S.StatBand b={block as B<'statBand'>} site={site} />;
    case 'homeTeam':
      return <S.HomeTeam b={block as B<'homeTeam'>} site={site} />;
    case 'teamGrid':
      return <S.TeamGrid b={block as B<'teamGrid'>} site={site} />;
    case 'story':
      return <S.Story b={block as B<'story'>} site={site} />;
    case 'caseList':
      return <S.CaseList b={block as B<'caseList'>} site={site} />;
    case 'contactMethods':
      return <S.ContactMethods b={block as B<'contactMethods'>} site={site} />;
    case 'infoCard':
      return <S.InfoCard b={block as B<'infoCard'>} site={site} />;
    case 'valueGrid':
      return <S.ValueGrid b={block as B<'valueGrid'>} site={site} />;
    case 'stepsMedia':
      return <S.StepsMedia b={block as B<'stepsMedia'>} site={site} />;
    case 'toolCards':
      return <S.ToolCards b={block as B<'toolCards'>} site={site} />;
    case 'stepCards':
      return <S.StepCards b={block as B<'stepCards'>} site={site} />;
    case 'features':
      return <S.Features b={block as B<'features'>} site={site} />;
    case 'pillars':
      return <S.Pillars b={block as B<'pillars'>} site={site} />;
    case 'output':
      return <S.Output b={block as B<'output'>} site={site} />;
    default:
      console.warn(`Unknown page builder block: ${block._type}`);
      return null;
  }
}

export function PageBuilder({ content, site }: { content?: Any[] | null; site: Site }) {
  return (
    <>
      {(content ?? []).map((block, i, all) => (
        <Fragment key={block._key}>{render(block, site, all[i - 1])}</Fragment>
      ))}
    </>
  );
}
