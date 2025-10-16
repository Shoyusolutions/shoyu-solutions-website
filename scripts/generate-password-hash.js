const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

function hideInput() {
  process.stdin.on('data', char => {
    char = char + '';
    switch (char) {
      case '\n':
      case '\r':
      case '\u0004':
        process.stdin.pause();
        break;
      default:
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write('Enter password: ' + '*'.repeat(rl.line.length));
        break;
    }
  });
}

console.log('🔐 Password Hash Generator');
console.log('--------------------------');
console.log('This will generate a secure hash for your admin password.\n');

rl.question('Enter password: ', async (password) => {
  if (!password || password.length < 8) {
    console.log('\n❌ Password must be at least 8 characters long');
    rl.close();
    return;
  }

  try {
    const hash = await bcrypt.hash(password, 12);
    console.log('\n✅ Password hash generated successfully!\n');
    console.log('Add this to your .env.local file:');
    console.log('---------------------------------');
    console.log(`ADMIN_PASSWORD_HASH=${hash}`);
    console.log(`JWT_SECRET=${generateSecret()}`);
    console.log('---------------------------------');
    console.log('\n⚠️  Keep these values secret and never commit them to git!');
  } catch (error) {
    console.error('\n❌ Error generating hash:', error.message);
  }

  rl.close();
});

function generateSecret() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let secret = '';
  for (let i = 0; i < 64; i++) {
    secret += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return secret;
}