export function TemplateButtons() {
  return (
    <div className="w-full flex flex-col justify-center align-middle items-center md:flex-row flex-wrap gap-2 py-8">
			<TemplateButton text="Build a chess simple app" />
			<TemplateButton text="Create a todo app with CRUD" />
			<TemplateButton text="Create a docs app" />
			<TemplateButton text="Create a base app" />
    </div>
  );
}

function TemplateButton({ text }: { text: string }) {
	return (
		<span className="w-fit cursor-pointer border border-bolt-elements-borderColor rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-zinc-900 text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary px-3 py-1 text-sm transition-theme">
			{text}
		</span>
	);
}