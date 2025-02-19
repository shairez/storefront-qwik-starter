import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { Analytics } from './analytics';
import { Social } from './social';

export const Head = component$(
	() => {
		const head = useDocumentHead();
		const loc = useLocation();

		return (
			<>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Vendure Qwik Storefront</title>
				<link rel="canonical" href={loc.href} />
				{head.meta.map((m) => (
					<meta {...m} />
				))}
				{head.links.map((l) => (
					<link {...l} />
				))}
				{head.styles.map((s) => (
					<style {...s.props} dangerouslySetInnerHTML={s.style} />
				))}
				<Social />
				<Analytics loc={loc} />
			</>
		);
	},
	{ tagName: 'head' }
);
