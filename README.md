# URL Shortener

Shortens URLs

## Inputs

### `url`:
**Required** URL to shorten

## Outputs

### `short_url`
The short URL

## Example usage

```yaml
on: [push]

jobs:
  url_shortener:
    runs-on: ubuntu-latest
    name: Short URLs
    steps:
    - name: shortener
      id: shortener
      uses: Gottox/url-shortener-action@v1.0.0
      with:
        url: "${{ github.event.compare }}"
    - name: outputs
      run: echo "${{ steps.shortener.outputs.short_url }}"
```
