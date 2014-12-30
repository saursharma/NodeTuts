/**
 * Reads file async and prints output.
 * Optimized code by removing unwanted var and clubbing commands.
 */

function callback(err, results) {
  if(err) return handleError(err);
  console.log('File content:', results);
}

require('fs').readFile('/etc/passwd', 'utf-8', callback);

