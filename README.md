# URL Shortener

Shortens URLs

## Inputs

### `url`:
**Required ** 'URL to shorten'
## Outputs
### `short_url`
The short URL

## Example usage

### Example 1: Shorten the compare URL

```yaml
on: [push]

jobs:
  url_shortener:
    runs-on: ubuntu-latest
    name: IRC notifications
    steps:
    - name: shortener
      id: shortener
      uses: Gottox/url-shortener-action@v1.0.0
      with:
        url: "${{ github.event.compare }}"
    - name: outputs
      run: echo "${{ steps.response.outputs.short_url }}"
```
