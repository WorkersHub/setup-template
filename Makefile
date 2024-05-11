sync:
	@rm -rf .build
	@npm run build
	@node scripts/copyJSFiles.js
	@node .build/index.js