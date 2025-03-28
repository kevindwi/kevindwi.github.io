+++
title = "My first post"
date = 2025-03-19

[extra]
image = "/images/photo.jpeg"
+++

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit. Pellentesque vel lacinia neque. Praesent nulla quam, ullamcorper in sollicitudin ac, molestie sed justo. Cras aliquam, sapien id consectetur accumsan, augue magna faucibus ex, ut ultricies turpis tortor vel ante. In at rutrum tellus.

# Sample heading 1
## Sample heading 2
### Sample heading 3
#### Sample heading 4
##### Sample heading 5
###### Sample heading 6

Mauris viverra dictum ultricies. Vestibulum quis ipsum euismod, facilisis metus sed, varius ipsum. Donec scelerisque lacus libero, eu dignissim sem venenatis at. Etiam id nisl ut lorem gravida euismod.

## Lists

Unordered:

- Fusce non velit cursus ligula mattis convallis vel at metus[^2].
- Sed pharetra tellus massa, non elementum eros vulputate non.
- Suspendisse potenti.

Ordered:

1. Quisque arcu felis, laoreet vel accumsan sit amet, fermentum at nunc.
2. Sed massa quam, auctor in eros quis, porttitor tincidunt orci.
3. Nulla convallis id sapien ornare viverra.
4. Nam a est eget ligula pellentesque posuere.

## Blockquote

The following is a blockquote:

> Suspendisse tempus dolor nec risus sodales posuere. Proin dui dui, mollis a consectetur molestie, lobortis vitae tellus.

## Code

Now some code:

```go
var (
	queue = make(chan int, 3)
	wg    = &sync.WaitGroup{}
)

func consumer() {
	for {
		task, open := <-queue
		if !open {
			break
		}
		wg.Add(1)
		go func(val int) {
			defer wg.Done()
			// some logic
		}(task)
	}
}

func producer() {
	var arr []int
	for i := 0; i < 1000000; i++ {
		arr = append(arr, i)
	}
	for _, val := range arr {
		select {
		case queue <- val:
		case <-time.After(time.Millesecond):
			fmt.Print("producer timeout")
		}
	}
}

func main() {
	go consumer()
	producer()
	wg.Wait()
}
```

And here is some `inline code`!

## Tables

Now a table:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Images

![Deskripsi Gambar](https://images.unsplash.com/photo-1451187580459-43490279c0fa)

Image of earth[^3]

---

[^1]: this is a footnote. It should highlight if you click on the corresponding superscript number.

[^2]: hey there, i'm using no style please!

[^3]: this is a very very long footnote to test if a very very long footnote brings some problems or not. I strongly hope that there are no problems but you know sometimes problems arise from nowhere.
