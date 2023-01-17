<script lang="ts">
    import { fonts as windows10Fonts } from '../lib/fonts.windows10';
    import { fonts as macosFonts } from '../lib/fonts.macos';
    import { onMount } from 'svelte';

    let text = 'Pchnąć w tę łódź jeża lub ośm skrzyń fig';
    let fontSizePx = '22';

    let fontNamesText = '';
    let availableFonts: Font[] = [];
    $: getFonts(fontNamesText).then((f) => (availableFonts = f));

    onMount(() => {
        getDefaultAvailableFontNames();
    });

    async function getFonts(fontNamesText: string): Promise<Font[]> {
        const fontNames = fontNamesText.split('\n');

        await document.fonts.ready;

        const fontsWithAvailability = [];

        for (const fontName of fontNames) {
            const available = document.fonts.check(`12px "${fontName}"`);
            fontsWithAvailability.push({
                name: fontName,
                available: available
            });
        }

        return fontsWithAvailability;
    }

    function kek() {
        let element = document.fonts.entries();

        var fonts = [];

        while (element != null) {
            fonts.push(element);
            element = element.next();
        }

        return fonts;
    }

    function getDefaultAvailableFontNames() {
        const knownFonts = new Set([...windows10Fonts, ...macosFonts]);

        fontNamesText = Array.from(knownFonts).join('\n');
    }

    interface Font {
        name: string;
        available: boolean;
    }
</script>

<div class="container">
    <h1>Font Awesome Comparer</h1>

    <form class="mb-3">
        <div class="row">
            <div class="col-6">
                <label class="form-label" for="text">Font size in pixels</label>
                <input class="form-control" name="number" bind:value={fontSizePx} />
            </div>
            <div class="col-6">
                <!-- <label class="form-label" for="text">Type in text you want to see</label>
                <input class="form-control" name="text" bind:value={text} /> -->
            </div>
            <div class="col-12">
                <label class="form-label" for="text">Font list:</label>
                <textarea class="form-control" name="text" bind:value={fontNamesText} />
                <div id="emailHelp" class="form-text">
                    You can paste all fonts separated with newlines here.
                    <br />
                    You can run following PowerShellCore code to copy all fonts to clipboard:
                    <pre>
    [System.Reflection.Assembly]::LoadWithPartialName("System.Drawing");
    $fonts=(New-Object System.Drawing.Text.InstalledFontCollection).Families.Name
    Set-Clipboard -Value $fonts
                    </pre>
                </div>
            </div>
            <div class="col-12">
                <label class="form-label" for="text">Type in text you want to see</label>
                <input class="form-control" name="text" bind:value={text} />
            </div>
        </div>
    </form>
</div>

<div class="d-flex flex-wrap justify-content-center gap-1">
    {#each availableFonts as font}
        <div class="card">
            <div class="card-header" class:bg-danger={!font.available}>
                {font.name}
            </div>
            <div class="card-body">
                <div class="carg-text">
                    <div style="font-family: '{font.name}'; font-size: {fontSizePx}px">{text}</div>
                    <div style="font-family: '{font.name}'; font-size: {fontSizePx}px"><b>{text}</b></div>
                    <div style="font-family: '{font.name}'; font-size: {fontSizePx}px"><i>{text}</i></div>
                </div>
            </div>
        </div>
    {/each}
</div>
