# 🚨 SECURITY NOTICE

## Files with Wallet Imports

The following files contain imports to wallet JSON files with private keys and should **NOT** be committed to git:

- `airdrop.ts`
- `transfer.ts` 
- `enroll.ts`

## Template Files Available

Use these template files instead:

- `airdrop.template.ts` - Safe template for airdrop functionality
- `transfer.template.ts` - Safe template for transfer functionality  
- `enroll.template.ts` - Safe template for enrollment functionality

## To Use Templates:

1. Copy the template file: `cp airdrop.template.ts airdrop.ts`
2. Import your wallet file
3. Uncomment and modify the code as needed

## Already Committed Sensitive Files?

If you've already committed files with wallet imports:

```bash
git rm --cached airdrop.ts transfer.ts enroll.ts
git commit -m "Remove sensitive wallet imports"
```

## Best Practices:

- Never commit wallet JSON files
- Never commit files that import wallet files
- Use environment variables for sensitive data
- Always check files before committing
