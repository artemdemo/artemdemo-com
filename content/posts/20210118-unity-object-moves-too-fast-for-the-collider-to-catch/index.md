---
title: Object moves too fast for the collider to catch (solution for unity)
date: "2021-01-18T20:05:00.000Z"
tags: ["game","unity"]
---

**TL;DR**

Do not relay on colliders for fast moving objects.
You need to use "Physics.Raycast" to determine when a collision took place.

<!-- end -->

**Long version**

Now, how actually to do it.

Usually you have this problem with bullets or bullet like objects (like arrows oh whatever).
In any other case you can just set "Collision Detection" to "Continuous" (in the Rigidbody of your object),
and it will just work fine.

![Object moves too fast for the collider to catch](oldman-attack-illustration.gif)

The issue is related to how collision detectors work. They do have their lifecycle.
They can't check for collisions at any given moment.
Therefore, if you have a gameObject that moves fast enough,
it can pass the collider check "between heartbeats" and wouldn't trigger the collision function.

The solution is to write a custom collision check.
Now your situation may be different, but the general approach is the following:

1. When object starts to move check whether it has intractable layers in its path.
1. On each update (it's better to use FixedUpdate for performance) check again, in case your aim is moving.
1. If you detect something on the path - store the hit point.
1. On each update (again FixedUpdate) check whether you passed stored hit point or not yet.
1. If you passed it - you can process collision.

With this approach it doesn't matter what is the speed of your "bullet".
