/**
 * Reads file and prints output.
 * Optimized code by removing unwanted var and clubbing commands.
 */

console.log('File content:', require('fs').readFileSync('/etc/passwd'));

