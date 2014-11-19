import os


file_count = 0
with open('combined.js', 'w') as combined:
    files = [ 'jquery-2.0.2.js', 'bullseye.js', 'hooks.js', 'navigation.js' ]
    for file in files:
        if file[-len('.js'):] == '.js' and file != 'combined.js':
            with open(file) as f:
                print('Combining file ' + file)
                combined.write(f.read())
                file_count += 1

print('%i files combined.' % file_count)
