import os

def replace_in_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content.replace('bg-black', 'bg-card')
                new_content = new_content.replace('border-[#353739]', 'border-border')
                new_content = new_content.replace('hover:border-[#555759]', 'hover:border-ring')
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f'Updated {filepath}')

replace_in_files('src')
