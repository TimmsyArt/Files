# Security Setup Documentation

## ✅ Completed Security Measures

### 1. Repository Privacy
- **Status**: ✅ **COMPLETE**
- The GitHub repository is now **PRIVATE**
- Only authorized users can access the repository
- Repository URL: https://github.com/TimmsyArt/Files

### 2. Git-Crypt File Encryption
- **Status**: ✅ **COMPLETE**
- git-crypt is installed and initialized
- Automatic encryption configured for sensitive files
- Encryption key exported for backup

## 🔐 Encryption Key Location

**IMPORTANT**: The encryption key is stored at:
```
%USERPROFILE%\git-crypt-key
```
(On Windows, this is typically: `C:\Users\[YourUsername]\git-crypt-key`)

**⚠️ CRITICAL**: 
- **BACKUP THIS KEY** to a secure location (password manager, encrypted USB drive, etc.)
- **DO NOT** commit this key to the repository
- **DO NOT** share this key publicly
- **WITHOUT THIS KEY**, encrypted files cannot be decrypted

## 📋 Files That Will Be Encrypted

Files matching these patterns in `.gitattributes` will be automatically encrypted:

- `*.env` - Environment configuration files
- `*_token.txt` - Token files
- `*_pat.txt` - Personal Access Token files
- `*_api_key.txt` - API key files
- `*_secrets.txt` - Secret files
- `*.key`, `*.pem` - Cryptographic keys
- `*_personal.txt`, `*_private.txt` - Personal information files
- `*.db`, `*.sqlite` - Database files
- And more (see `.gitattributes` for full list)

## 🚀 How to Use Git-Crypt

### Adding a New Encrypted File

1. Create your sensitive file (e.g., `my_secrets.txt`)
2. Ensure it matches a pattern in `.gitattributes`
3. Add and commit normally:
   ```bash
   git add my_secrets.txt
   git commit -m "Add encrypted secrets file"
   ```
4. The file will be automatically encrypted on commit

### Viewing Encrypted Files Locally

Encrypted files are automatically decrypted when you check them out:
- Files appear normal in your working directory
- They are encrypted in the Git repository
- No special commands needed to read them locally

### Cloning the Repository

When someone clones the repository, they need the encryption key:

1. Clone the repository:
   ```bash
   git clone https://github.com/TimmsyArt/Files.git
   cd Files
   ```

2. Unlock encrypted files:
   ```bash
   git-crypt unlock [path-to-key-file]
   ```

### Sharing the Encryption Key Securely

To allow collaborators to decrypt files:

1. **Secure Method**: Share the key file through:
   - Encrypted email
   - Password-protected file sharing
   - Secure messaging (Signal, etc.)
   - Password manager shared vault

2. **DO NOT**:
   - Email the key in plaintext
   - Commit the key to the repository
   - Share via unencrypted channels

## 🔧 Git-Crypt Commands Reference

```bash
# Check encryption status of files
git-crypt status

# Show only encrypted files
git-crypt status -e

# Export encryption key (for backup/sharing)
git-crypt export-key /path/to/backup-key

# Unlock repository with key
git-crypt unlock /path/to/key-file

# Lock repository (remove decryption)
git-crypt lock
```

## 📝 Git Credentials Security

- Personal Access Token is stored in **Windows Credential Manager** (encrypted)
- Token is **NOT** stored in plaintext in Git config
- Credentials are automatically used for Git operations

## ⚠️ Important Security Notes

1. **Backup the Encryption Key**: Store it in multiple secure locations
2. **Repository is Private**: But encryption adds an extra layer of security
3. **Key Rotation**: If the key is compromised, you'll need to:
   - Generate a new key: `git-crypt rekey`
   - Re-encrypt all files
   - Distribute new key to collaborators
4. **File Patterns**: Review `.gitattributes` regularly to ensure all sensitive files are covered
5. **Never Commit Keys**: The encryption key itself should never be in the repository

## 🆘 Troubleshooting

### "git-crypt: not a git-crypt repository"
- Run: `git-crypt init` (only needed once)

### "git-crypt: command not found"
- Add git-crypt to PATH or use full path:
  ```bash
  $env:Path += ";$env:USERPROFILE\git-crypt"
  ```

### Files not encrypting
- Check that file matches a pattern in `.gitattributes`
- Re-add the file: `git rm --cached filename && git add filename`

## 📞 Support

For git-crypt documentation: https://github.com/AGWA/git-crypt

---

**Last Updated**: 2025-01-27
**Setup By**: Automated Security Configuration

